const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const app = express()

require('dotenv').config()
const PORT = process.env.PORT || 5000

// Router
app.use(morgan('dev'))
app.use(express.json())

// add all middleware
app.use('/api/login', require('./app/routes/login_rts'))

// enable cors
app.use(cors())

app.listen(PORT, () => console.log(`Server RunNing on port ${PORT}`))
