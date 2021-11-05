const jwt = require('jsonwebtoken');
const { decode } = require('jsonwebtoken')
require('dotenv').config()

const AuthToken = (req, res, next) => {
  // function custome message
  try {
    if (process.env.JWT_ACTIVE == 0) { return next(); }
    // function get token from headers
    const token = req.header('auth-token');
    console.log(req.header)
    const decoded = jwt.verify(token, process.env.JWT_TOKEN);
    // isi data session
    //console.log(decoded)

    if (decoded) {
      // return next if true
      req.mySession = decoded;
      //console.log(decoded)
      return next()
    }
  } catch (err) {
    //msg if token failed or expaired
    res.json({ code: 200, message: 'Anauthorized invalid token ' })
  }
}

module.exports = { AuthToken }
