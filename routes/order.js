const { Router } = require("express")
const router = Router()

const orderController = require("../controllers/order")

router.get("/", orderController.getOrder)
router.post("/", orderController.addOrder)

module.exports = router