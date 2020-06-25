class Bike {
  constructor(isWorking = true) {
    this._isWorking = isWorking;
  }

  isBroken() {
    return !this._isWorking;
  }
}

module.exports = { Bike }