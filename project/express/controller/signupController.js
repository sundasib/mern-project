const signupService = require("../service/signupService");
const joi = require("joi");
const createsignupSchema = joi.object().keys({
  password: joi.string().required(),
  username: joi.string().required(),
  email: joi.string().required(),
});
module.exports = {
  createsignup: async (req, res) => {
    try {
      const validate = await createsignupSchema.validateAsync(req.body);
      const Signup = await signupService.createsignup(validate);
      if (Signup.error) {
        return res.send({
          error: Signup.error,
        });
      }
      return res.send({
        response: Signup.response,
      });
    } catch (error) {
      return res.send({
        error: error.message,
      });
    }
  },
};
