
function Ship(itinerary) {
  this.itinerary = itinerary;
  this.currentPort = itinerary.ports[0];

  this.currentPort.addShip(this);
}

Ship.prototype.setSail = function () {
  this.currentPort = '';
};

Ship.prototype.dock = function () {
  const itinerary = this.itinerary;
  const previousPortIndex = itinerary.ports.indexOf(this.currentPort);

  this.currentPort = itinerary.ports[previousPortIndex + 1];

  this.currentPort.addShip(this);

};


module.exports = Ship;
