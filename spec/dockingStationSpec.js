const { DockingStation } = require('../src/dockingStation')

let dockingStation

describe('DockingStation', () => {

  beforeAll(() => {
    dockingStation = new DockingStation();
  });

  it('can release a bike from a docking station', () => {
    expect(dockingStation.releaseBike()).toEqual('Bike');
  });

  it('can dock a bike', () => {
    expect(dockingStation.dockBike()).toEqual(true)
  })

  it('has a bike docked', () => {
    dockingStation = new DockingStation('Bike');
    expect(dockingStation.bikes).toEqual(['Bike'])
  })
}); 