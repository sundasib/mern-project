/// middleware is used for if we want to get all user its only possible if the user is login

//verify your token
const { verify } = require("jsonwebtoken");
// will verify on the basis of signatur(secret) and signature is stored in .env file thats why we import dotenv file
require("dotenv").config();
module.exports = {
  middleware: async (req, res, next) => {
    try {
      if (req.cookies.token == undefined || null) {
        return res.send({
          error: "unauthorised User",
        });
      }
      //const isVerified = verify(req.cookies.token, process.env.SECRET,)
      verify(req.cookies.token, process.env.SECRET, (error, user) => {
        if (error) {
          return res.send({
            error: "unauthorized User",
          });
        }
        //console.log("req data", req.cookies.token);
        console.log("user data", user);
        next();
      });
    } catch (error) {
      return res.send({
        error: error.message,
      });
    }
  },
};
