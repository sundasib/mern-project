const sequelize = require("../bin/dbConnection");
const Users = require("./definitions/users");
const Roles = require("./definitions/roles");
const courses = require("./definitions/courses");
const Address = require("./definitions/addreses");
const userCourses = require("./definitions/userCourses");
const signup = require("./definitions/signup");
const Session = require("./definitions/session");
//relations star here

Address.hasOne(Users, { foreignKey: "addressId" });
Users.belongsTo(Address, { foreignKey: "addressId" });

Roles.hasMany(Users, { foreignKey: "rolesId" });
Users.belongsTo(Roles, { foreignKey: "rolesId" });

Users.hasMany(userCourses, { foreignKey: "userId" });
userCourses.belongsTo(Users, { foreignKey: "userId" });
courses.hasMany(userCourses, { foreignKey: "courseId" });
userCourses.belongsTo(courses, { foreignKey: "courseId" });

/// one to one user and session relation
Users.hasOne(Session, { foreignKey: "userId" });
Session.belongsTo(Users, { foreignKey: "userId" });
//relations end here

const models = {
  //user: USERS,
  Users,
  Roles,
  courses,
  Address,
  userCourses,
  signup,
  Session,
};
const db = {}; //create empty object
db.sequelize = sequelize; ///object pass to db.sequelize
sequelize.models = models; // models pass to sequelize model
module.exports = { db, models };
