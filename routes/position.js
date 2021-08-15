const { Router } = require("express")
const router = Router()

const positionController = requireRoot("controllers/position")

router.get("/:category", positionController.getPositionByCategory)
router.delete("/:id", positionController.deletePosition)
router.post("/", positionController.addPosition)
router.patch("/:id", positionController.updatePosition)

module.exports = router