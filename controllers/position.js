const PositionModel = requireRoot("models/Position")
const errorHandler = requireRoot("utils/errorHandler")

module.exports.getPositionByCategoryId = async (req, res) => {
    try {
        const positions = await PositionModel.find({
            category: req.params.categoryId,
            user: req.user.id
        })
        res.status(200).json(positions)
    } catch (e) {
        errorHandler(res, e)
    }
}

module.exports.deletePosition = async (req, res) => {
    try {
        await PositionModel.remove({ _id: req.params.id })
        res.status(200).json({
            message: 'Position has been deleted'
        })
    } catch (e) {
        errorHandler(res, e)
    }
}

module.exports.addPosition = async (req, res) => {
    try {
        const position = await new PositionModel({
            name: req.body.name,
            cost: req.body.cost,
            category: req.body.category,
            user: req.user.id
        }).save()
        res.status(201).json(position)
    } catch (e) {
        errorHandler(res, e)
    }
}

module.exports.updatePosition = async (req, res) => {
    try {
        const position = await PositionModel.findOneAndUpdate(
            { _id: req.params.id },
            { $set: req.body },
            { new: true }
        )
        res.status(200).json(position)
    } catch (e) {
        errorHandler(res, e)
    }
}