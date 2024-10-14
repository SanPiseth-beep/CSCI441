const dotenv = require('dotenv').config();
const Keycloak = require("keycloak-connect");

//Auth configuration
const authConfig = {
    "realm": process.env.KEYCLOAK_REALM,
    "auth-server-url": `${process.env.KEYCLOAK_URL}`,
    "ssl-required": "external",
    "resource": process.env.KEYCLOAK_CLIENT,
    // "redirect_uri": `${process.env.KEYCLOAK_REDIRECT}`,
    // "client-id": process.env.KEYCLOAK_CLIENT,
    // "bearer-only": true
}

module.exports = new Keycloak({}, authConfig);
