const router = require("express").Router();
const { usersController } = require("../controllers");
const { isAuthorized } = require("../middlewares");
var cors = require('cors');

router.use(cors({
    "origin": "https://presente-camp.vercel.app",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
  }));

router.use(isAuthorized);

router.get("/", usersController.list);
module.exports.users = router;
