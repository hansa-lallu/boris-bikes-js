const { DockingStation } = require('../src/dockingStation')

let dockingStation

describe('DockingStation', () => {

  beforeAll(() => {
    dockingStation = new DockingStation();
  });

  it('can release a bike from a docking station', () => {
    expect(dockingStation.releaseBike()).toEqual('Here is your Bike');
  });

  it('can dock a bike', () => {
    expect(dockingStation.dockBike()).toEqual('Your Bike has been docked')
  });

  it('has a bike docked', () => {
    dockingStation = new DockingStation('Bike');
    expect(dockingStation.bikes).toEqual(['Bike'])
  });

  it('does not release a bike if no bike is available', () => {
    dockingStation.releaseBike();
    expect(dockingStation.releaseBike()).toEqual('No Bikes Available')
  });

  it('has a default capacity', () => {
    expect(dockingStation.capacity).toEqual(20)
  });

  it('does not allow docking when the docking station is full', () => {
    for (var i = 0; i < 20; i++) {
      dockingStation.dockBike() 
    };
    expect(function () { dockingStation.dockBike() }).toThrowError('No space to dock Bike')
  });
}); 
