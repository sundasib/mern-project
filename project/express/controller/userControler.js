const userService = require("../service/userService");
//const { v4: uuid } = require("uuid");
//const uuid = require("uuid");
const joi = require("joi");
const createRoleSchema = joi.object().keys({
  rolename: joi.string().required(),
});

const deleteUserSchema = joi.object().keys({
  //userId:joi.string().required(),
  userId: joi.string().required(),
});
const getuserByUserIdSchema = joi.object().keys({
  userId: joi.string().required(),
});

const updateUserSchema = joi.object().keys({
  username: joi.string().required(),
  userId: joi.string().required(),
});
const createUserSchema = joi.object().keys({
  username: joi.string().required(),
  password: joi.string().required(),
  address: joi.string().required(),
  rolesId: joi.string().required(),
});

const getAllUserSchema = joi.object().keys({
  pageNo: joi.number().required().min(1),
  limit: joi.number().required().valid(10, 15),
  username: joi.string(),
  address: joi.string(),
  rolename: joi.string(),
  column: joi.string().optional(),
  order: joi.string().optional().valid("ASC", "DESC"),
});
module.exports = {
  createRole: async (req, res) => {
    try {
      const validate = await createRoleSchema.validateAsync(req.body);
      //const roleId = uuid();
      //validate.roleId = uuid();
      //const role = await userService.createRole(req.body);
      const role = await userService.createRole(validate);
      //const role = await userService.createRole(req.body);
      if (role.error) {
        return res.send({
          error: role.error,
        });
      }
      return res.send({
        response: role.response,
      });
    } catch (error) {
      return res.send({
        error: error.message,
      });
    }
  },
  getRole: async (req, res) => {
    try {
      const role = await userService.getRole();
      if (role.error) {
        return res.send({
          error: role.error,
        });
      }
      return res.send({
        response: role.response,
      });
    } catch (error) {
      return res.send({
        error: error.message,
      });
    }
  },
  createUser: async (req, res) => {
    try {
      const validate = await createUserSchema.validateAsync(req.body);
      const createdUser = await userService.createUser(validate);
      if (createdUser.error) {
        return res.send({
          error: createdUser.error,
        });
      }
      return res.send({
        response: createdUser.response,
      });
    } catch (error) {
      return res.send({
        error: error.message,
      });
    }
  },
  getAllUser: async (req, res) => {
    try {
      const validate = await getAllUserSchema.validateAsync(req.query);
      const users = await userService.getAllUser(validate);
      if (users.error) {
        return res.send({
          error: users.error,
        });
      }
      return res.send({
        response: users.response,
      });
    } catch (error) {
      return res.send({
        error: error.message,
      });
    }
  },
  deleteUser: async (req, res) => {
    try {
      const validate = await deleteUserSchema.validateAsync(req.query);
      const deletedUser = await userService.deleteUser(validate);
      if (deletedUser.error) {
        return res.send({
          error: deletedUser.error,
        });
      }
      return res.send({
        response: deletedUser.response,
      });
    } catch (error) {
      return res.send({
        error: error.message,
      });
    }
  },
  updateUser: async (req, res) => {
    try {
      const updatedUser = await userService.updateUser();
      if (updatedUser.error) {
        return res.send({
          error: updatedUser.error,
        });
      }
      return res.send({
        response: updatedUser.response,
      });
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },
  recoverUser: async (req, res) => {
    try {
      const validate = await updateUserSchema.validateAsync(req.body);
      const updatedUser = await userService.recoverUser(validate);
      if (updatedUser.error) {
        return res.send({
          error: updatedUser.error,
        });
      }
      return res.send({
        response: updatedUser.response,
      });
    } catch (error) {
      return res.send({
        error: error.message,
      });
    }
  },
  getuserByUserId: async (req, res) => {
    try {
      const validate = await getuserByUserIdSchema.validateAsync(req.query);
      const user = await userService.getuserByUserId(validate);
      if (user.error) {
        return res.send({
          error: user.error,
        });
      }
      return res.send({
        response: user.response,
      });
    } catch (error) {
      return res.send({
        error: error.message,
      });
    }
  },
};

/*const joi = require("joi");
const { login, largnum } = require("../service/userService");
const loginSchema = joi.object().keys({
  username: joi.string().min(1).required(),
  password: joi.string().max(8).required(),
});
module.exports = {
  login: async (req, res) => {
    try {
      const validate = await loginSchema.validateAsync(req.body);
      const loginResponse = await login(validate);
      if (loginResponse.error) {
        return res.send({
          response: loginResponse.error,
        });
      }
      return res.send({
        response: loginResponse.response,
      });
      // return res.send({
      //  message: "login api",
      // data: validate,
      //});
    } catch (error) {
      return res.send({
        error: error.message,
      });
    }
  },
  largnum: (req, res) => {
    try {
      const numbers = req.body.numbers;
      const largestnumber = largnum(numbers);
      res.send({ largestnumber });
    } catch (error) {
      return res.send({
        error: error.message,
      });
    }
  },
};*/
