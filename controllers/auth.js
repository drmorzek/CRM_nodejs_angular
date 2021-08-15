module.exports.login = (req,res) => {
    res.status(200).json({ body: req.body})
}

module.exports.register = (req,res) => {
    res.status(200).json("register")
}