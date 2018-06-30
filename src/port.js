
function Port(name) {
  this.currentPort = name;
}

Port.prototype.addShip = function () {
  this.ships = {};

};

module.exports = Port;
