const Itinerary = require('../src/itinerary.js');

describe('Itinerary', () => {

  it('should be instantiated', () => {
    expect(new Itinerary()).toBeInstanceOf(Object);
  });
});
