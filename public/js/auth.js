
document.addEventListener("DOMContentLoaded", async function () {
    const loginButton = document.getElementById('loginBtn');
    const logoutBtn = document.getElementById('logoutBtn');
    const registerBtn = document.getElementById('registerBtn');

    const keycloak = new Keycloak({
        url: "http://localhost:9080/",
        realm: "bikeshare",
        clientId: "user-account"
    });

    try {
        const authenticated = await keycloak.init({redirectUri: 'http://localhost:3000/homepage1',checkLoginIframe: false});
        if (authenticated) {
            console.log('User is authenticated');
            console.log(keycloak.loadUserProfile());
        } else {
            console.log('User is not authenticated');
        }

    } catch (error) {
        console.error('Failed to initialize adapter:', error);
    }

    if (loginButton) {
        loginButton.addEventListener("click", function () {
            console.log('Login button clicked');
            keycloak.login();
        })
    }

    if (logoutBtn) {
        logoutBtn.addEventListener("click", function () {
            console.log('Logout button clicked');
            keycloak.logout({redirectUri: 'http://localhost:3000/'});
        })
    }

    if (registerBtn) {
        registerBtn.addEventListener("click", function () {
            console.log('Register button clicked');
            keycloak.register();
        })
    }

})
