class DockingStation {
  constructor(name) {
    this.bikes = [name]
  }
  
  releaseBike() {
    return 'Bike'
  };

  dockBike() {
    return true;
  }
};

module.exports = { DockingStation }