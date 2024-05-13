const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../bin/dbConnection");

class userCourses extends Model {}
userCourses.init(
  {
    userCoursesId: {
      primaryKey: true,
      type: DataTypes.STRING(),
    },
  },
  {
    timestamps: true,
    paranoid: true,
    sequelize,
  }
);
module.exports = userCourses;
