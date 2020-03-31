const crypto = require('crypto');

module.exports = function generateUniqueId(){
    return crypto.pseudoRandomBytes(4).toString('HEX');
}