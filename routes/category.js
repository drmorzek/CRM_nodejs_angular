const { Router } = require("express")
const router = Router()

const categoryController = requireRoot("controllers/category")
const passportAuth = requireRoot("utils/passportAuth")
const upload = requireRoot('middleware/upload')


router.get("/", passportAuth(), categoryController.getCategory)
router.get("/:id", passportAuth(), categoryController.getCategoryById)
router.delete("/:id", passportAuth(), categoryController.deleteCategory)
router.post("/", passportAuth(), upload.single('image'), categoryController.addCategory)
router.patch("/:id", passportAuth(), upload.single('image'), categoryController.updateCategory)

module.exports = router