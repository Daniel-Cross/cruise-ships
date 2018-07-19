const Ship = require('../src/ship.js');
const Port = require('../src/port.js');
const Itinerary = require('../src/itinerary');

describe('Ship', () => {

  let dover;
  let calais;
  let itinerary;
  let ship;

  beforeEach(() => {
    dover = new Port('Dover');
    calais = new Port('Calais');
    itinerary = new Itinerary([dover, calais]);
    ship = new Ship(itinerary);

  });
  it('can be instantiated', () => {
    expect(ship).toBeInstanceOf(Object);
  });

  it('has a starting port', () => {
    expect(dover.currentPort).toBe('Dover');
  });

  it('sets sail from current port', () => {
    ship.setSail();
    expect(ship.currentPort).toBeFalsy();
    expect(ship.previousPort).toBe(dover);
  });

  it('can dock at a different port', () => {
    ship.setSail();
    ship.dock();
    expect(ship.currentPort).toBe(calais);
  });

  it('can\'t sail further than the itinerary', () => {

    ship.setSail();
    ship.dock();
    expect(() => ship.setSail()).toThrowError('End of itinerary reached');
  });

});
