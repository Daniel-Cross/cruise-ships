const Itinerary = require('../src/itinerary.js');
const Port = require('../src/port.js');

let dover;
let calais;
let itinerary;

beforeEach(() => {
  dover = new Port('Dover');
  calais = new Port('Calais');
  itinerary = new Itinerary([dover.currentPort, calais.currentPort]);
});

describe('Itinerary', () => {

  it('can be instantiated', () => {
    expect(new Itinerary()).toBeInstanceOf(Object);
  });

  it('can have ports', () => {
    expect(itinerary.ports).toEqual([dover.currentPort, calais.currentPort]);
  });

});
