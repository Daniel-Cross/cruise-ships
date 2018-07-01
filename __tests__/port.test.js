const Port = require('../src/port.js');

describe('Port', () => {

  it('should instatiate an Object', () => {

    expect(new Port()).toBeInstanceOf(Object);
  });

  it('port should hold a port name', () => {

    const port = new Port('Calais');

    expect(port.currentPort).toBe('Calais');

  });

  it('can add a ship', () => {
    const port = new Port('Dover');
    const ship = {};

    port.addShip(ship);

    expect(port.ships).toContain(ship);


  });

  it('can remove a ship', () => {
    const port = new Port('Dover');
    const titanic = {};
    const queenMary = {};

    port.addShip(titanic);
    port.addShip(queenMary);

    port.removeShip(queenMary);

    expect(port.ships).toEqual([titanic]);
  });

});
