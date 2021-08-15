const { Router } = require("express")
const router = Router()

const authController = requireRoot("controllers/auth")

router.post("/login", authController.login)
router.post("/register", authController.register)

module.exports = router