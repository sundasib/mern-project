const { models } = require("./index");
const { Op } = require("sequelize");
module.exports = {
  createRole: async (body) => {
    try {
      const role = await models.Roles.create({ ...body });
      return {
        response: role,
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },
  getRole: async () => {
    try {
      const role = await models.Roles.findAll();
      return {
        response: role,
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },

  //user oper
  createdAddress: async (body) => {
    try {
      const createdAddress = await models.Address.create({ ...body });
      return {
        response: createdAddress,
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },

  createUser: async (body) => {
    try {
      const createdUser = await models.Users.create({ ...body });
      return {
        response: createdUser,
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },
  getAllUser: async (offset, query) => {
    try {
      const users = await models.Users.findAll({
        attributes: ["username", "userId", "createdAt"],
        //for filter
        where: {
          ...(query.username
            ? { username: { [Op.substring]: query.username } }
            : true),
        },
        // for delete multiple column{
        //exclude: ["password", "createdAt", "deletedAt", "updatedAt"],
        // },
        //for show address information by addressid,roleid
        include: [
          {
            model: models.Address,
            attributes: ["addressId", "address"],
            //for filter
            where: {
              ...(query.address
                ? { address: { [Op.substring]: query.address } }
                : true),
            },
          },
          {
            model: models.Roles,
            attributes: ["rolesId", "rolename"],
            where: {
              ...(query.rolename ? { rolename: query.rolename } : true),
            },
          },
        ],
        // select specific attributes to display["username", "password"],
        //for paging
        offset: offset,
        limit: query.limit,
        //for sorting
        //order:[["userId","ASC"]]
        order: [
          [
            query.column ? query.column : "userId",
            query.order ? query.order : "ASC",
          ],
        ],
      });
      return {
        response: users,
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },
  //for user already exists
  getuserByUsername: async (username) => {
    try {
      console.log("username", username);
      const user = await models.Users.findOne({
        where: {
          username: username,
        },
      });
      return {
        response: user,
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },

  deleteUser: async (userId) => {
    try {
      const deletedUser = await models.Users.destroy({
        where: {
          userId: userId,
        },
      });
      return {
        response: deletedUser,
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },
  updateUser: async () => {
    try {
      const updatedUser = await models.Users.update(
        {
          deletedAt: null,
        },
        {
          where: {
            deletedAt: {
              [Op.ne]: null,
            },
          },
          paranoid: false,
        }
      );
      return {
        response: updatedUser,
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },
  recoverUser: async (body, userId) => {
    try {
      const updatedUser = await models.Users.update(
        {
          ...body,
        },
        {
          where: {
            userId: userId,
          },
        }
      );
      return {
        response: updatedUser,
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },
  getuserByUserId: async (userId) => {
    try {
      const user = await models.Users.findOne({
        where: {
          userId: userId,
        },
        attributes: ["userId", "username", "addressId", "rolesId"],
        include: [
          {
            model: models.Address,
            attributes: ["addressId", "address"],
          },
          {
            model: models.Roles,
            attributes: ["rolesId", "rolename"],
          },
        ],
      });
      return {
        response: user,
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },
  createSession: async (body) => {
    try {
      const session = await models.Session.create({ ...body });
      return {
        response: session,
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },
  updateSession: async (body) => {
    try {
      const session = await models.Session.update(
        { ...body },
        {
          where: {
            userId: body.userId,
          },
        }
      );
      return {
        response: session,
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },
  getSession: async (userId) => {
    try {
      const session = await models.Session.findOne({
        where: {
          userId: userId,
        },
      });
      return {
        response: session,
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },
};
