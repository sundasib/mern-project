const routes = require("express").Router();
routes.get("/myadmin", (req, res) => {
  return res.send("im admin here");
});
module.exports = routes;
