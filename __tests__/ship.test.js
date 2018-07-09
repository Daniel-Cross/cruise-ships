const Ship = require('../src/ship.js');
const Port = require('../src/port.js');
const Itinerary = require('../src/itinerary.js');

let dover;
let ship;
let calais;
let itinerary;
let ships;
let dockedShips;
let itineraryOne;
let shipOne;

beforeEach(() => {
  dover = new Port('Dover', ships);
  calais = new Port('Calais', ships);
  itineraryOne = new Itinerary([dover.currentPort]);
  itinerary = new Itinerary([dover.currentPort, calais.currentPort]);
  ship = new Ship(itinerary);
  shipOne = new Ship(itineraryOne);
  ships = ['HMS Victory', 'The Black Flag', 'HMS Titanic'];
  dockedShips = new Port(dover.ships);
});

describe('ship', () => {
  it('can be instantiated', () => {
    expect(ship).toBeInstanceOf(Object);
  });

  it('has a starting port', () => {
    expect(ship.currentPort).toEqual(dover.currentPort);
  });

  it('can set sail', () => {
    ship.setSail();
    expect(ship.currentPort).toBeFalsy();
  });

  it('can dock at a different port', () => {
    ship.setSail();
    ship.dock();
    expect(ship.currentPort).toBe(calais.currentPort);
    expect(calais.ships).toContain(ship);

  });

  it('can\'t sail further than its itinerary', () => {
    ship.setSail();
    ship.dock();
    expect(() => ship.setSail()).toThrowError('End of itinerary reached');
  });

  it('gets added to port on instantiation', () => {
    expect(shipOne).toContain(dockedShips);
  });

});
