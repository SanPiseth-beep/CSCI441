document.addEventListener('DOMContentLoaded', function() {
    const signUpButton = document.getElementById('signup-button');
    const loginButton = document.getElementById('login-button');
    const stationButton = document.getElementById('station-button');

    signUpButton.addEventListener('click', function() {
        alert('Sign Up clicked! Redirecting to the sign-up page...');
        window.location.href = '/signup'; //place to link
    });

    loginButton.addEventListener('click', function() {
        alert('Log In clicked! Redirecting to the login page...');
        window.location.href = '/login'; //place to link
    });

    stationButton.addEventListener('click', function() {
        alert('Pick Your Station clicked! Navigating to station selection...');
        window.location.href = '/stations'; //place to link
    });
});
