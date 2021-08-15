const { Router } = require("express")
const router = Router()

const analiticsController = require("../controllers/analitics")

router.get("/overview", analiticsController.getOverview)
router.get("/analytics", analiticsController.getAnalitics)

module.exports = router