const { Router } = require("express")
const router = Router()

const categoryController = requireRoot("controllers/category")
const passportAuth = requireRoot("utils/passportAuth")

router.get("/", passportAuth(), categoryController.getCategory)
router.get("/:id", passportAuth(), categoryController.getCategoryById)
router.delete("/:id", passportAuth(), categoryController.deleteCategory)
router.post("/", passportAuth(),categoryController.addCategory)
router.patch("/:id", passportAuth(), categoryController.updateCategory)

module.exports = router