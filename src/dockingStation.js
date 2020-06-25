class DockingStation {
  constructor(capacity) {
    this.bikes = []
    this.capacity = capacity ? capacity : 20
  };
  
  releaseBike() {
    if (this.bikes.length === 0) { 
      throw new Error('No Bikes Available')
    }

    if (this.bikes[this.bikes.length - 1].isBroken) {
      throw new Error('Unable to release a broken bike')
    }

    this.bikes.pop()
    return 'Here is your Bike'
  };

  dockBike(bike) {
    if(this.bikes.length === this.capacity) {
      throw new Error('Docking Station is Full. No space to dock Bike') 
    } else {
      this.bikes.push(bike);
      return 'Your Bike has been docked'
    };
  };
};

module.exports = { DockingStation }