const path = require("path")
global.__dirname = process.cwd()
global.requireRoot = file => require(path.join(__dirname, file))

const {app, mongoose} = require('./app');

const { PORT , MONGO_URL} = require("./config/keys")


mongoose.connect(MONGO_URL)
    .then(() => {
        console.log("MongoDB connected")
    })
    .then(() => {
        app.listen(PORT, () => {
            console.log(`server run on port ${PORT}`)
        })
    })
