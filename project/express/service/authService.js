//const bcrypt = require("bcryptjs");

const userModel = require("../models/userModel");
const { compare } = require("bcryptjs");
const { sign } = require("jsonwebtoken");
const { v4: uuid } = require("uuid");
require("dotenv").config();
module.exports = {
  login: async (body) => {
    try {
      const user = await userModel.getuserByUsername(body.username);

      if (user.error || user.response == null) {
        return {
          error: "invalid Credentials",
        };
      }
      const isValid = await compare(
        body.password,
        user.response.dataValues.password
      );
      if (!isValid) {
        return {
          error: "Invalid Credentials",
        };
      }
      delete user.response.dataValues.password;
      //token generate
      const jwt = sign(user, process.env.SECRET, { expiresIn: "60000" });
      const obj = {
        sessionId: uuid(),
        token: jwt,
        userId: user.response.dataValues.userId,
      };
      // console.log("session", obj);
      const isSession = await userModel.getSession(obj.userId);
      if (isSession.error) {
        return {
          error: "Invalid Credentials",
        };
      }
      if (isSession.response) {
        const session = await userModel.updateSession(obj);
        if (session.error) {
          return {
            error: "Invalid Credentials",
          };
        }
        return {
          response: jwt,
        };
      }
      if (!isSession.response) {
        const session = await userModel.createSession(obj);
        if (session.error) {
          return {
            error: "Invalid Credentials",
          };
        }
        return {
          response: jwt,
        };
      }
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },
};

/*module.exports = {
  signup: async (validate) => {
    try {
      validate.email = await bcrypt.hash(validate.email, 15);
      {
        return {
          response: validate,
        };
      }
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },
};*/
//

/*module.exports = {
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
};*/
///
