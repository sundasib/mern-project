const { createsignup } = require("../controller/signupController");
const routes = require("express").Router();
routes.post("/createsignup", createsignup);
module.exports = routes;
