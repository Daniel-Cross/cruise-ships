const Port = require('../src/port.js');

let port;
let calais;
let ship;

beforeEach(() => {
  port = new Port('Dover', ship);
  calais = new Port('Calais');
  ship = ['The Black Flag', 'HMS Titanic'];

});

describe('Port', () => {

  it('should instatiate an Object', () => {
    expect(new Port()).toBeInstanceOf(Object);
  });

  it('it should have a name', () => {
    expect(port.currentPort).toBe('Dover');
  });

  it('can add a ship to the port', () => {
    port.addShip('HMS Victory');
    expect(port.ships).toEqual(['The Black Flag', 'HMS Titanic', 'HMS Victory']);
  });

  it('can remove a ship from a port', () => {
    port.removeShip('HMS Titanic');
    expect(port.ships).toEqual(['The Black Flag']);
  });


});
