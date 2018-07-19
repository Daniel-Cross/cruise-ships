function Port(portName) {
  this.currentPort = portName;
  this.ships = [];
};

Port.prototype.addShip = function addShip(ship) {
  this.ships.push(ship);
};

Port.prototype.removeShip = function removeShip(ship) {
  this.ships = this.ships.filter(x => x !== ship);
};

module.exports = Port;
