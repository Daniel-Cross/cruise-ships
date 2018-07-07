
function Ship(itinerary) {
  this.itinerary = itinerary;
  this.currentPort = itinerary.ports[0];
  this.previousPort = null;
}

Ship.prototype.setSail = function setSail() {
  const itinerary = this.itinerary;
  const currentPortIndex = itinerary.ports.indexOf(this.currentPort);

  if (currentPortIndex === (itinerary.ports.legnth - 1)) {
    throw new Error('End of itinerary reached');
  }

  this.previousPort = this.currentPort;
  this.currentPort = null;
};

Ship.prototype.dock = function dock() {
  const itinerary = this.itinerary;
  const previousPortIndex = itinerary.ports.indexOf(this.previousPort);
  this.currentPort = itinerary.ports[previousPortIndex + 1];
};

module.exports = Ship;
