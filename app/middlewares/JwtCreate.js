const jwt = require('jsonwebtoken');
require('dotenv').config()

function createToken(payload) {
    return jwt.sign({ ...payload }, process.env.JWT_TOKEN, { expiresIn: process.env.JWT_EXP, algorithm: 'HS384' })

}


module.exports = { createToken }
