const signupModel = require("../models/signupModel");

module.exports = {
  createsignup: async (body) => {
    try {
      const Signup = await signupModel.createsingup(body);
      if (Signup.error) {
        return {
          error: Signup.error,
        };
      }
      return {
        response: Signup.response,
      };
    } catch (error) {
      return {
        error: error.message,
      };
    }
  },
};
