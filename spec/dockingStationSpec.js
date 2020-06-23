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
    expect(dockingStation.dockBike()).toEqual(true)
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
}); 