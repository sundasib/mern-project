const { models } = require("./index");
module.exports = {
  createsingup: async (body) => {
    try {
      const Signup = await models.signup.create({ ...body });
      return {
        response: Signup,
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },
};
