const router = require("express").Router();
const { authController } = require("../controllers");

router.post("/signin", authController.signin);
router.post("/signup", authController.signup);
router.post("/logout", authController.logout);

module.exports.auth = router;
