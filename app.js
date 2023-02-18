const express = require('express')
const app = express()
const cors = require("cors");
const port = 6000
const tourRoute = require('./route/v1/tour.route')

// middleware
app.use(express.json())
app.use(cors())

app.use('/api/v1/tour', tourRoute)

app.get("/", (req, res) => {
    res.send("Route is working! YaY!");
});
  


module.exports = app;