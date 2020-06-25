const { DockingStation } = require('../src/dockingStation')

describe('DockingStation', () => {

  it('has a default capacity', () => {
    const dockingStation = new DockingStation();
    expect(dockingStation.capacity).toEqual(20)
  });

  it('can change its default capcity', () => {
    const dockingStation = new DockingStation(30);
    expect(dockingStation.capacity).toEqual(30)
  });

  describe('release bike', () => {
    it('can release a bike from a docking station', () => {
      const dockingStation = new DockingStation();
      const bike = { isBroken: false }
      dockingStation.dockBike(bike)
      expect(dockingStation.releaseBike()).toEqual('Here is your Bike');
    });
  
    it('does not release a bike if no bike is available', () => {
      const dockingStation = new DockingStation();
      expect(function () { dockingStation.releaseBike() }).toThrowError('No Bikes Available')
    });
  
    it('does not release a broken bike', () => {
      const bike = { isBroken: true }
      const dockingStation = new DockingStation();
      dockingStation.dockBike(bike)

      expect(function () { dockingStation.releaseBike() }).toThrowError('Unable to release as Bike is broken')
    });
  });

  describe('docking bike', () => {
    it('has a bike docked', () => {
      const bike = {}
      const dockingStation = new DockingStation();
      dockingStation.dockBike(bike) 
      expect(dockingStation.bikes).toEqual([bike])
    });
  
    it('can dock a bike', () => {
      const dockingStation = new DockingStation();
      expect(dockingStation.dockBike()).toEqual('Your Bike has been docked')
    });
  
    it('does not allow docking when the docking station is full', () => {
      const dockingStation = new DockingStation();
      for (var i = 0; i < 20; i++) {
        dockingStation.dockBike() 
      };
      expect(function () { dockingStation.dockBike() }).toThrowError('Docking Station is Full. No space to dock Bike')
    });

    it ('allows both broken and working bikes', () => {
      const workingBike = {isBroken: false };
      const brokenBike = { isBroken: true };

      const dockingStation = new DockingStation();
      dockingStation.dockBike(workingBike);
      dockingStation.dockBike(brokenBike);

      expect(dockingStation.bikes).toEqual([workingBike, brokenBike]);
    });
  });
}); 
