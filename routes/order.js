const { Router } = require("express")
const router = Router()

const orderController = requireRoot("controllers/order")
const passportAuth = requireRoot("utils/passportAuth")

router.get("/", passportAuth(), orderController.getOrder)
router.post("/", passportAuth(), orderController.addOrder)

module.exports = router