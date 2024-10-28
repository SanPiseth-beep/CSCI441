const dotenv = require('dotenv').config();
const Keycloak = require("keycloak-connect");

//Auth configuration
const authConfig = {
    "realm": process.env.KEYCLOAK_REALM,
    "auth-server-url": `${process.env.KEYCLOAK_URL}`,
    "ssl-required": "external",
    "resource": process.env.KEYCLOAK_CLIENT,
    "bearer-only": false
}

module.exports = new Keycloak({}, authConfig);
