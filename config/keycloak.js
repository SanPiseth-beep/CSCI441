const dotenv = require('dotenv').config();
const session = require('express-session');
var Keycloak = require('keycloak-connect');
const express = require("express");

var memoryStore = new session.MemoryStore();
const app = express();

app.use(session({
    secret: process.env.KEYCLOAK_CLIENT_SECRET,
    resave: false,
    saveUninitialized: true,
    store: memoryStore
}));

var keycloak = new Keycloak({
    store: memoryStore
}, 'config/keycloak.json');

app.use(keycloak.middleware({
    logout: '/logout',
    admin: '/'
}));

module.exports = keycloak;

