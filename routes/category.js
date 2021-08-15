const { Router } = require("express")
const router = Router()

const categoryController = require("../controllers/category")

router.get("/", categoryController.getCategory)
router.get("/:id", categoryController.getCategoryById)
router.delete("/:id", categoryController.deleteCategory)
router.post("/", categoryController.addCategory)
router.patch("/:id", categoryController.updateCategory)

module.exports = router