class DockingStation {
  constructor(capacity) {
    this.bikes = []
    this.capacity = capacity ? capacity : 20
  };
  
  releaseBike() {
    if (this.bikes.length === 0) { 
      throw new Error('No Bikes Available')
    } else {
    this.bikes.pop()
      return 'Here is your Bike'
    };
  };

  dockBike() {
    if(this.bikes.length === this.capacity) {
      throw new Error('Docking Station is Full. No space to dock Bike') 
    } else {
      this.bikes.push('Bike');
      return 'Your Bike has been docked'
    };
  };
};

module.exports = { DockingStation }