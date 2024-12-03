// public/js/rent.js
document.addEventListener('DOMContentLoaded', async function() {
  const stationsDropdown = document.getElementById('stations-dropdown');
  const rentForm = document.getElementById('rent-form');
  const rentBikeForm = document.getElementById('rent-bike-form');

  function checkSelections() {
    if (stationsDropdown.value) {
      rentForm.style.display = 'block';
    } else {
      rentForm.style.display = 'none';
    }
  }

  try {
    const response = await fetch('/api/stations-and-bikes');
    const data = await response.json();

    if (data.stations && data.bikes) {
      data.stations.forEach(station => {
        const option = document.createElement('option');
        option.value = station.stationID;
        option.textContent = station.stationName;

        // Check if there are available bikes for this station
        const availableBikes = data.bikes.filter(bike => bike.stationId === station.stationID && bike.isAvailable);
        if (availableBikes.length === 0) {
          option.disabled = true; // Grey out the station if no bikes are available
        }

        stationsDropdown.appendChild(option);
      });

      // Re-initialize the select element to update the options
      M.FormSelect.init(stationsDropdown);
    } else {
      console.error('Stations or bikes data is missing');
    }
  } catch (error) {
    console.error('Error fetching stations and bikes:', error);
  }

  rentBikeForm.addEventListener('submit', async function(event) {
    event.preventDefault();
    const bikeId = document.getElementById('bike-id').value;
    const userId = document.getElementById('user-id').value;
    const cardNumber = document.getElementById('card-number').value;
    const cardExpiry = document.getElementById('card-expiry').value;
    const cardCVC = document.getElementById('card-cvc').value;
    const destination = document.getElementById('destination').value;
    const phoneNumber = document.getElementById('phone-number').value;

    try {
      const response = await fetch('/api/rent-bike', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ bikeId, userId, cardNumber, cardExpiry, cardCVC, destination, phoneNumber }),
      });

      const result = await response.json();
      if (response.ok) {
        alert('Bike rented successfully!');
        window.location.href = '/testing1'; // Redirect to the testing1 page
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error('Error renting bike:', error);
    }
  });
});