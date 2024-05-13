const joi = require("joi");
/*const { signup } = require("../service/authService");
const signupSchema = joi.object().keys({
  email: joi.string().required(),
  firstname: joi.string().required(),
  lastname: joi.string().required(),
});
module.exports = {
  signup: async (req, res) => {
    try {
      const validate = await signupSchema.validateAsync(req.body);
      const signupResponse = await signup(validate);
      if (signupResponse.error) {
        return res.send({
          error: signupResponse.error,
        });
      }
      console.log("check");

      return res.send({
        response: signupResponse.response,
      });
    } catch (error) {
      return res.send({
        error: error.message,
      });
    }
  },
};*/

const authService = require("../service/authService");
const loginSchema = joi.object().keys({
  username: joi.string().min(1).required(),
  password: joi.string().min(6).required(),
});
module.exports = {
  login: async (req, res) => {
    try {
      const validate = await loginSchema.validateAsync(req.body);
      const loginResponse = await authService.login(validate);

      if (loginResponse.error) {
        return res.send({
          error: loginResponse.error,
        });
      }
      res.cookie("token", loginResponse.response, {
        maxAge: 60000,
        httpOnly: true,
      });
      return res.send({
        //response: loginResponse.response,
        response: true,
      });

      //not included
      // return res.send({
      //   message: "login api",
      //   data: validate,
      // });
    } catch (error) {
      return res.send({
        error: error.message,
      });
    }
  },
};
