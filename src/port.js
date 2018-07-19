/* globals window */
(function exportPort() {
  function Port(portName) {
    this.currentPort = portName;
    this.ships = [];
  }

  Port.prototype.addShip = function addShip(ship) {
    this.ships.push(ship);
  };

  Port.prototype.removeShip = function removeShip(ship) {
    this.ships = this.ships.filter(x => x !== ship);
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = Port;
  } else {
    window.Port = Port;

  }

}());
