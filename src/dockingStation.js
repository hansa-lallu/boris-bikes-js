class DockingStation {
  constructor(name) {
    this.bikes = [name]
    this.capacity = 20 
  }
  
  releaseBike() {
    if (this.bikes.length === 0) { 
      return 'No Bikes Available' 
    } else {
    this.bikes.pop()
      return 'Here is your Bike'
    };
  };

  dockBike() {
    return true;
  }
};

module.exports = { DockingStation }