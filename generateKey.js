// written by: Piseth San,

// generateKey.js
const crypto = require('crypto');

const key = crypto.randomBytes(32).toString('hex');
console.log(`Generated Encryption Key: ${key}`);