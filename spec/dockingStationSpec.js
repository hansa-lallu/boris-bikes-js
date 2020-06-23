const { DockingStation } = require('../src/dockingStation')


describe('DockingStation', () => {

  it('can release a bike from a docking station', () => {
    const dockingStation = new DockingStation();
    dockingStation.dockBike()
    expect(dockingStation.releaseBike()).toEqual('Here is your Bike');
  });

  it('can dock a bike', () => {
    const dockingStation = new DockingStation();
    expect(dockingStation.dockBike()).toEqual('Your Bike has been docked')
  });

  it('does not release a bike if no bike is available', () => {
    const dockingStation = new DockingStation();
    expect(function () { dockingStation.releaseBike() }).toThrowError('No Bikes Available')
  });

  it('has a default capacity', () => {
    const dockingStation = new DockingStation();
    expect(dockingStation.capacity).toEqual(20)
  });

  it('does not allow docking when the docking station is full', () => {
    const dockingStation = new DockingStation();
    for (var i = 0; i < 20; i++) {
      dockingStation.dockBike() 
    };
    expect(function () { dockingStation.dockBike() }).toThrowError('No space to dock Bike')
  });

  it('has a bike docked', () => {
    const dockingStation = new DockingStation();
    dockingStation.dockBike() 
    expect(dockingStation.bikes).toEqual(['Bike'])
  });
}); 
