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
    if(this.bikes.length === this.capacity) {
      throw new Error('No space to dock Bike') 
    } else {
      this.bikes.push('Bike');
      return 'Your Bike has been docked'
    }
  }
};

module.exports = { DockingStation }