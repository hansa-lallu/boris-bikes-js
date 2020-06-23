const { DockingStation } = require('../src/dockingStation')

describe('DockingStation', () => {
  it('can release a bike from a docking station', () => {
    const dockingStation = new DockingStation();
    expect(dockingStation.releaseBike()).toEqual('Bike');
  });
}); 