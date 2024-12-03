// public/js/rent.js
document.addEventListener('DOMContentLoaded', async function() {
  const stationsDiv = document.getElementById('stations');
  const bikesDiv = document.getElementById('bikes');
  const rentForm = document.getElementById('rent-form');
  const rentBikeForm = document.getElementById('rent-bike-form');

  const response = await fetch('/api/stations-and-bikes');
  const { stations, bikes } = await response.json();

  stations.forEach(station => {
    const stationElement = document.createElement('div');
    stationElement.textContent = `Station: ${station.name}`;
    stationsDiv.appendChild(stationElement);
  });

  bikes.forEach(bike => {
    const bikeElement = document.createElement('div');
    bikeElement.textContent = `Bike ID: ${bike.id}`;
    bikeElement.addEventListener('click', () => {
      document.getElementById('bike-id').value = bike.id;
      rentForm.style.display = 'block';
    });
    bikesDiv.appendChild(bikeElement);
  });

  rentBikeForm.addEventListener('submit', async function(event) {
    event.preventDefault();
    const bikeId = document.getElementById('bike-id').value;
    const userId = document.getElementById('user-id').value;
    const cardNumber = document.getElementById('card-number').value;
    const cardExpiry = document.getElementById('card-expiry').value;
    const cardCVC = document.getElementById('card-cvc').value;
    const amount = document.getElementById('amount').value;

    const response = await fetch('/api/rent-bike', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ bikeId, userId, cardNumber, cardExpiry, cardCVC, amount }),
    });

    const result = await response.json();
    if (response.ok) {
      alert('Bike rented successfully!');
    } else {
      alert(result.message);
    }
  });
});