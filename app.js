const mongoose = require('mongoose');
const express = require('express');
const passport = require('passport')
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const authRoutes = require("./routes/auth")
const orderRoutes = require("./routes/order")
const categoryRoutes = require("./routes/category")
const positionRoutes = require("./routes/position")
const analiticsRoutes = require("./routes/analitics")

const app = express();

app.use(passport.initialize())
require('./middleware/passport')(passport)

app.use(morgan("dev"))
app.use(bodyParser.urlencoded({ extended : true}))
app.use(bodyParser.json())
app.use(cors())

app.use("/api/auth" , authRoutes)
app.use("/api/order" , orderRoutes)
app.use("/api/category" , categoryRoutes)
app.use("/api/position" , positionRoutes)
app.use("/api/analytics" , analiticsRoutes)

module.exports = {app, mongoose }