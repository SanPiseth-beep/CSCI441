
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
        const authenticated = await keycloak.init({onLoad:'check-sso', redirectUri: 'http://localhost:3000/',checkLoginIframe: false});
        if (authenticated) {
            console.log('User is authenticated');
        } else {
            console.log('User is not authenticated');
        }

    } catch (error) {
        console.error('Failed to initialize adapter:', error);
    }

    if (loginButton) {
        loginButton.addEventListener("click", function () {
            keycloak.login({redirectUri:'http://localhost:3000/signedin'});
        })
    }

    if (logoutBtn) {
        logoutBtn.addEventListener("click", function () {
            keycloak.logout({redirectUri: 'http://localhost:3000/'});
        })
    }

    if (registerBtn) {
        registerBtn.addEventListener("click", function () {
            keycloak.register();
        })
    }

})
