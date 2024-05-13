//const controller = require("../controller/userControler");
//const { middleware } = require("../middleware");
const routes = require("express").Router();
const {
  createRole,
  getRole,
  createUser,
  getAllUser,
  deleteUser,
  updateUser,
  recoverUser,
  getuserByUserId,
} = require("../controller/userControler");

routes.post("/createRole", createRole);
routes.get("/getRole", getRole);
routes.post("/createUser", createUser);
///routes.get("/getAllUser", middleware, getAllUser);
routes.get("/getAllUser", getAllUser);
routes.delete("/deleteUser", deleteUser);
routes.patch("/updateUser", updateUser);
routes.put("/recoverUser", recoverUser);
routes.get("/getuser", getuserByUserId);
module.exports = routes;

/*const routes = require("express").Router();


const userControler = require("../controller/userControler");

routes.post("/largnum", userControler.largnum);

routes.post("/login", userControler.login);

module.exports = routes;*/
