const routes = require("express").Router();
/*const { signup } = require("../controller/authController");

routes.post("/signup", signup);
module.exports = routes;*/
const { login } = require("../controller/authController");
routes.post("/login", login);
module.exports = routes;
