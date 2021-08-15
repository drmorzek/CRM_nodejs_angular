const { Router } = require("express")
const router = Router()

const positionController = requireRoot("controllers/position")
const passportAuth = requireRoot("utils/passportAuth")

router.get("/:categoryId", passportAuth(), positionController.getPositionByCategoryId)
router.delete("/:id", passportAuth(), positionController.deletePosition)
router.post("/", passportAuth(), positionController.addPosition)
router.patch("/:id", passportAuth(), positionController.updatePosition)

module.exports = router