const { Bike } = require('../src/bike')

describe('Bike', () => {
  describe('isBroken', () => {
    it('returns false if bike is not broken', () => {
      const bike = new Bike();
      expect(bike.isBroken()).toEqual(false);
    });
  
    it('returns true if bike is broken', () => {
      const bike = new Bike(false);
      expect(bike.isBroken()).toEqual(true)
    });
  })
});