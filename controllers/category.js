const CategoryModel = requireRoot("models/Category")
const PositionModel = requireRoot("models/Position")
const errorHandler = requireRoot("utils/errorHandler")

module.exports.getCategory = async (req, res) => {
    try {
        const categories = await CategoryModel.find({ user: req.user.id })
        res.status(200).json(categories)

    } catch (e) {
        errorHandler(res, e)
    }
}

module.exports.getCategoryById = async (req, res) => {
    try {
        const category = await Category.findById(req.params.id)
        res.status(200).json(category)

    } catch (e) {
        errorHandler(res, e)
    }
}

module.exports.deleteCategory = async (req, res) => {
    try {
        await CategoryModel.remove({ _id: req.params.id })
        await PositionModel.remove({ category: req.params.id })
        res.status(200).json({
            message: 'Category has been deleted'
        })

    } catch (e) {
        errorHandler(res, e)
    }
}

module.exports.addCategory = async (req, res) => {
    try {
        const category = new CategoryModel({
            name: req.body.name,
            user: req.user.id,
            imageSrc: req.file ? req.file.path : ''
        })
        await category.save()
        res.status(201).json(category)
    } catch (e) {
        errorHandler(res, e)
    }
}

module.exports.updateCategory = async (req, res) => {

    try {
        const updated = {
            name: req.body.name
        }

        if (req.file) {
            updated.imageSrc = req.file.path
        }

        const category = await CategoryModel.findOneAndUpdate(
            { _id: req.params.id },
            { $set: updated },
            { new: true }
        )
        res.status(200).json(category)
    } catch (e) {
        errorHandler(res, e)
    }
}