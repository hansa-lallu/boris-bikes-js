const { Bike } = require('../src/bike')

describe('Bike', () => {
  it('checks if a bike is working', () => {
    const bike = new Bike();
    expect(bike.isWorking()).toEqual(true);
  });

  it('can be reported broken', () => {
    const bike = new Bike();
    expect(bike.reportBroken()).toEqual(true)
  });
});