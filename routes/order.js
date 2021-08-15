const { Router } = require("express")
const router = Router()

const orderController = requireRoot("controllers/order")

router.get("/", orderController.getOrder)
router.post("/", orderController.addOrder)

module.exports = router