// written by: Piseth San
// edited by: Nilin Lay

// public/js/return.js
document.addEventListener('DOMContentLoaded', async function() {
    const stationsDropdown = document.getElementById('stations-dropdown');
    const returnBikeForm = document.getElementById('return-bike-form');
  
    try {
      const response = await fetch('/api/stations-and-bikes');
      const data = await response.json();
  
      if (data.stations) {
        data.stations.forEach(station => {
          const option = document.createElement('option');
          option.value = station.stationID;
          option.textContent = station.stationName;
          stationsDropdown.appendChild(option);
        });
  
        // Re-initialize the select element to update the options
        M.FormSelect.init(stationsDropdown);
      } else {
        console.error('Stations data is missing');
      }
    } catch (error) {
      console.error('Error fetching stations:', error);
    }
  
    returnBikeForm.addEventListener('submit', async function(event) {
      event.preventDefault();
      const bikeId = document.getElementById('bike-id').value;
      const stationId = stationsDropdown.value;
      const userId = document.getElementById('user-id').value;
  
      try {
        const response = await fetch('/api/return-bike', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ bikeId, stationId, userId }),
        });
  
        const result = await response.json();
        if (response.ok) {
          alert('Bike returned successfully! Thank you!');
          // Redirect to another page
          window.location.href = '/signedIn';
        } else {
          alert(result.message);
        }
      } catch (error) {
        console.error('Error returning bike:', error);
      }
    });
  });