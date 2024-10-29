document.addEventListener('DOMContentLoaded', function() {
    const stationButton = document.getElementById('station-button');

    stationButton.addEventListener('click', function() {
        alert('Pick Your Station clicked! Navigating to station selection...');
        window.location.href = '/stations'; //place to link
    });
});