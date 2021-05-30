const router = require("express").Router();
const { usersController } = require("../controllers");
const { isAuthorized } = require("../middlewares");
var cors = require('cors');

router.use(cors());

router.use(isAuthorized);

router.get("/", usersController.list);
module.exports.users = router;
