// public/js/rent.js
document.addEventListener('DOMContentLoaded', async function() {
  const stationsDropdown = document.getElementById('stations-dropdown-container');
  const dropdownIcon = document.querySelector('.dropdown-icon');
  const selectedStationDiv = document.getElementById('selected-station');
  const rentForm = document.getElementById('rent-form');
  const rentBikeForm = document.getElementById('rent-bike-form');
  const bikeIdInput = document.getElementById('bike-id');
  const continueBtn = document.getElementById('continueBtn');
  const rentSummary = document.getElementById('rent-summary');
  const contBtns1 = document.querySelectorAll("#contBtns1 .col");
  const rentInfoDiv = document.getElementById('rent-info-content');
  const addCardRadio = document.getElementById('new-wallet');
  const paymentCard = document.getElementById('payment-container');
  const stationBikeAvail = document.getElementById('stationsBike-dropdown-container');

  function toggleDropdown() {
    const isVisible = stationsDropdown.style.display === 'block';
    stationsDropdown.style.display = isVisible ? 'none' : 'block';
  }

  function checkSelections() {
    const bikeId = bikeIdInput.value;
    const selectedStation = document.querySelector('input[type="radio"]:checked');
    // const stationId = selectedStation ? selectedStation.parentElement.parentElement.getAttribute('data-value'): null;
    const stationId = selectedStation 
    ? selectedStation.closest('.card-panel').getAttribute('data-value') : null;
    if (selectedStation){
    const stationName = selectedStation.nextElementSibling.textContent;
    selectedStationDiv.textContent = `Selected Station: ${stationName}`;
    //hide the dropdown 
    stationsDropdown.style.display= 'none';
  } else {
    selectedStationDiv.textContent = 'No station selected';
  }
    
    
    if (bikeId && stationId) {
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
        // const option = document.createElement('option');
        // option.value = station.stationID;
        // option.textContent = station.stationName;

        // Check if there are available bikes for this station
        const availableBikes = data.bikes.filter(bike => bike.stationId === station.stationID && bike.isAvailable);
        // Count the total bikes and available bikes for the station
        const totalBikes = availableBikes.length;
        const stationAvailBikes = availableBikes.filter(bike => bike.isAvailable).length;
        const stationDiv = document.createElement('div');
        stationDiv.className= `card-panel col s12 valign-wrapper`;
        stationDiv.style.margin= '0';
        stationDiv.style.height= '50px';
        //if it is last station, add rounded corners for styling
        if (station.stationID === data.stations[data.stations.length - 1].stationID) {
          stationDiv.style.borderBottomLeftRadius = '10px';
          stationDiv.style.borderBottomRightRadius = '10px';
      }

      stationDiv.setAttribute('data-value', station.stationID);
        if (availableBikes.length === 0) {
          //option.disabled = true; // Grey out the station if no bikes are available
          // stationDiv.style.opacity = '0.5';
        }

        //render the radio btn for stations with no bike disabled
        stationDiv.innerHTML = `
        <a class="drop-content col s12">
            <label class= "col s12">
                <input 
                    type="radio" 
                    name="station" 
                    class="with-gap" 
                    ${availableBikes.length === 0 ? 'disabled' : ''} 
                />
                <span class="col s6">${station.stationName}</span>
                <span class="col s6 right-align grey-text lighten-3">${stationAvailBikes} available </span>
            </label>
        </a>`;

        stationsDropdown.appendChild(stationDiv);
      });

      // Re-initialize the select element to update the options
      // M.FormSelect.init(stationsDropdown);
    } else {
      console.error('Stations or bikes data is missing');
    }
  } catch (error) {
    console.error('Error fetching stations and bikes:', error);
  }
  dropdownIcon.addEventListener('click', toggleDropdown);
  stationsDropdown.addEventListener('click', function (event) {
    if(event.target.matches('input[type="radio"]')) {
      checkSelections();
    }
  });
  bikeIdInput.addEventListener('input', checkSelections);
  continueBtn.addEventListener('click', () => {
    //show the Trip summary
    rentSummary.style.display= 'block';
    if (rentSummary.style.display === 'block') {
      const bikeId = bikeIdInput.value;
      const userId = document.getElementById('user-id').value;
      const destination = document.getElementById('destination').value;
      const duration = document.getElementById('duration').value;
      const phoneNumber = document.getElementById('phone-number').value;

      rentInfoDiv.innerHTML = `
        <h6>Destination: ${destination}</h6>
        <p>Rate: $2/Hour</p>
        <br>
        <p>Name: </p>
        <p>Bike ID: ${bikeId} </p>
        <p>Duration: ${duration}</p>
        <p>Phone:${phoneNumber}</p>
        <h6>Subtotal: $${duration *2}</h6>
        `;
    }
    // make the btns above disappear
    contBtns1.forEach(btns => {
      btns.style.display= 'none';
    })
  })

  addCardRadio.addEventListener('change', () => {
    if (addCardRadio.checked) {
      //change display of paymentcontainer to block
      paymentCard.style.display= 'block';
    }
    else {
      paymentCard.style.display= 'none';
    }
  })

  rentBikeForm.addEventListener('submit', async function(event) {
    event.preventDefault();
    const bikeId = bikeIdInput.value;
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
        body: JSON.stringify({ 
          bikeId,
          userId,
          cardNumber,
          cardExpiry,
          cardCVC,
          destination,
          phoneNumber }),
      });

      const result = await response.json();
      if (response.ok) {
        // alert('Bike rented successfully!');
        window.location.href = '/success'; // Redirect to the testing1 page
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error('Error renting bike:', error);
    }
  });
});