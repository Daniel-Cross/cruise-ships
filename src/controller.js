/* globals window document */
(function exportController() {
  function Controller(ship) {
    this.ship = ship;
    this.initialiseSea();

    document.querySelector('#setSail').addEventListener('click', () => {
      this.setSail();
    });


  }

  Controller.prototype = {
    initialiseSea() {
      const backgrounds = [
        './images/water0.png',
        './images/water1.png',
      ];
      let backgroundIndex = 0;
      setInterval(() => {
        const water = document.querySelector('#water');
        water.style.backgroundImage = `url('${backgrounds[backgroundIndex]}')`;

        backgroundIndex += 1;
        if (backgroundIndex === backgrounds.length) {
          backgroundIndex = 0;
        }
      }, 1000);
    },

    renderPorts(ports) {
      const portsElement = document.querySelector('#ports');
      portsElement.style.width = '0px';

      ports.forEach((port, index) => {
        const newPortElement = document.createElement('div');
        newPortElement.className = 'port';
        newPortElement.dataset.portIndex = index;

        portsElement.appendChild(newPortElement);

        const portsElementWidth = parseInt(portsElement.style.width, 10);
        portsElement.style.width = `${portsElementWidth + 256}px`;

      });
    },

    renderShip() {
      const ship = this.ship;

      const shipPortIndex = ship.itinerary.ports.indexOf(ship.currentPort);
      const portElement = document.querySelector(`[data-port-index='${shipPortIndex}']`);

      const shipElement = document.querySelector('#ship');
      shipElement.style.top = `${portElement.offsetTop + 32}px`;
      shipElement.style.left = `${portElement.offsetLeft - 32}px`;
    },

    setSail() {
      const ship = this.ship;

      const currentPortIndex = ship.itinerary.ports.indexOf(ship.currentPort);
      //console.log(currentPortIndex);

      const nextPortIndex = currentPortIndex + 1;
      //console.log(nextPortIndex);

      const nextPortElement = document.querySelector(`[data-port-index='${nextPortIndex}']`);
      //console.log(nextPortElement);

      if (!nextPortElement) {
        return alert('End of the line!');
      }

      this.hud();

      this.renderMessage(`Now departing ${ship.currentPort.currentPort}`);
      ship.setSail();
      const shipElement = document.querySelector('#ship');
      const sailInterval = setInterval(() => {
        const shipLeft = parseInt(shipElement.style.left, 10);

        if (shipLeft === (nextPortElement.offsetLeft - 32)) {
          ship.dock();
          clearInterval(sailInterval);
          this.renderMessage(`Now arriving at ${ship.currentPort.name}`);
          this.hud();
        }

        shipElement.style.left = `${shipLeft + 1}px`;
      }, 20);
    },

    renderMessage(message) {
      const messageElement = document.createElement('div');
      messageElement.id = 'message';
      messageElement.innerHTML = message;

      const water = document.querySelector('#water');
      water.appendChild(messageElement);

      setTimeout(() => {
        water.removeChild(messageElement);
      }, 2000);
    },

    hud() {
      const ship = this.ship;
      const currentPortIndex = ship.itinerary.ports.indexOf(ship.currentPort);
      const nextPortIndex = currentPortIndex + 1;

      const hudOneElement = document.querySelector('#hud1');
      hudOneElement.id = 'hud1';
      hudOneElement.innerHTML = `Current Port: ${ship.currentPort.currentPort}`;
      const hudTwoElement = document.querySelector('#hud2');
      hudTwoElement.id = 'hud2';
      hudTwoElement.innerHTML = `Next Port: ${ship.itinerary.ports[nextPortIndex].currentPort}`;
    },

  };


  if (typeof module !== 'undefined' && module.exports) {
    module.exports = Controller;
  } else {
    window.Controller = Controller;
  }
}());
