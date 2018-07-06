const Port = require('../src/port.js');

let dover;
let calais;

beforeEach(() => {
  dover = new Port('Dover');
  calais = new Port('Calais');

});

describe('Port', () => {

  it('should instatiate an Object', () => {
    expect(new Port()).toBeInstanceOf(Object);
  });

  it('it should have a name', () => {
    expect(dover.currentPort).toBe('Dover');
  });


});
