
function Port(name, ships) {
  this.currentPort = name;
  this.ships = ships;
}

Port.prototype.addShip = function addShip(dockedShip) {
  this.ships.push(dockedShip);
};

Port.prototype.removeShip = function removeShip(shipLeavingPort) {
  this.ships = this.ships.filter(ship => ship !== shipLeavingPort);
};

module.exports = Port;
