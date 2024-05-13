const userModel = require("../models/userModel");
const { hash } = require("bcryptjs");
const { v4: uuid } = require("uuid");
module.exports = {
  createRole: async (body) => {
    try {
      body.rolesId = uuid();
      const role = await userModel.createRole(body);
      if (role.error) {
        return {
          error: role.error,
        };
      }
      return {
        response: role.response,
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },
  getRole: async () => {
    try {
      const role = await userModel.getRole();
      if (role.error) {
        return {
          error: role.error,
        };
      }
      return {
        response: role.response,
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },
  //user oper
  createUser: async (body) => {
    try {
      const address = {
        addressId: uuid(),
        address: body.address,
      };
      const createdAddress = await userModel.createdAddress(address);
      if (createdAddress.error) {
        return {
          error: createdAddress.error,
        };
      }
      //if user already exists
      const isUser = await userModel.getuserByUsername(body.username);
      if (isUser.error || isUser.response) {
        return {
          error: "user with this username already exists!",
        };
      }

      const user = {
        userId: uuid(),
        username: body.username,
        password: await hash(body.password, 10),
        rolesId: body.rolesId,
        //addressId: createdAddress.response?.dataValues.addressId || "",
        addressId: address.addressId,
      };
      const createdUser = await userModel.createUser(user);
      if (createdUser.error) {
        return {
          error: createdUser.error,
        };
      }
      return {
        response: createdUser.response,
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },
  getAllUser: async (query) => {
    try {
      //calculate offset for paging
      const offset = (query.pageNo - 1) * query.limit;
      // const users = await userModel.getAllUser(offset, query.limit);
      const users = await userModel.getAllUser(offset, query);
      if (users.error) {
        return {
          error: users.error,
        };
      }
      return {
        response: users.response,
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },
  deleteUser: async (query) => {
    try {
      const deletedUser = await userModel.deleteUser(query.userId);
      if (deletedUser.error) {
        return {
          error: deletedUser.error,
        };
      }
      return {
        response: deletedUser.response,
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },
  updateUser: async () => {
    try {
      const updatedUser = await userModel.updateUser();
      if (updatedUser.error) {
        return {
          error: updatedUser.error,
        };
      }
      return {
        response: updatedUser.response,
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },
  recoverUser: async (body) => {
    try {
      const updatedUser = await userModel.recoverUser(body, body.userId);
      if (updatedUser.error) {
        return {
          error: updatedUser.error,
        };
      }
      return {
        response: updatedUser.response,
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },
  getuserByUserId: async (query) => {
    try {
      const user = await userModel.getuserByUserId(query.userId);
      if (user.error) {
        return {
          error: user.error,
        };
      }
      return {
        response: user.response,
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },
};

/*const bcrypt = require("bcrypt");
module.exports = {
  login: async (validate) => {
    try {
      validate.password = await bcrypt.hash(validate.password, 10);
      console.log("check");
      return {
        response: validate,
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },
  largnum: (numbers) => {
    if (!numbers || !Array.isArray(numbers) || numbers.length === 0) {
      throw new error("input is invalid");
    }
    return Math.max(...numbers);
  },
};*/
