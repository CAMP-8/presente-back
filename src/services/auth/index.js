const { signin } = require("./signin.service");
const  { logout }  = require("./logout.service");
const { signup } = require("./signup.service");

module.exports = {
  signup,
  signin,
  logout,
};
