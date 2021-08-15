const errorHandler = requireRoot("utils/errorHandler")

module.exports.getCategory = (req,res) => {
    // try {
        

    // } catch(e){
    //     errorHandler(res, e)
    // }
    console.log(req.user.id)
    res.status(200).json("getOrder")
}

module.exports.getCategoryById = (req,res) => {
    res.status(200).json("getOrder")
}

module.exports.deleteCategory = (req,res) => {
    res.status(200).json("getOrder")
}

module.exports.addCategory = (req,res) => {
    res.status(200).json("getOrder")
}

module.exports.updateCategory = (req,res) => {
    res.status(200).json("getOrder")
}