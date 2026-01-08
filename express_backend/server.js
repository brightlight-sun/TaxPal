const express = require('express')
// create the object of the express server
const app = express()
const userRoutes = require('./routes/userRoutes')
const cors = require("cors")

//inits mongoDB connection
require('./utils/db')


//middlewares

//reads json
app.use(express.json())
app.use(cors())


//routes
app.use('/api/users', userRoutes)


// start the server on the port
app.listen(4000, 'localhost', () => {
    console.log('server started at port 4000')
})