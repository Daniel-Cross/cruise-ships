const Port = require('../src/port.js');

describe('Port', () => {

  let dover;
  let titanic;

  beforeEach(() => {
    dover = new Port('Dover');
    titanic = 'Titanic';
  });

  it('can be instantiated', () => {
    expect(new Port()).toBeInstanceOf(Object);
  });

  it('has a port name', () => {
    expect(dover.currentPort).toBe('Dover');
  });

  it('can add a docked ship to a port', () => {
    dover.addShip(titanic);
    expect(dover.ships).toEqual(['Titanic']);
  });

  it('can remove a ship from port', () => {
    dover.addShip('Titanic');
    dover.addShip('Victory');
    dover.removeShip('Titanic');
    expect(dover.ships).toEqual(['Victory']);
  });

});
