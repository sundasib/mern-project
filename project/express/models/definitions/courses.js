const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../bin/dbConnection");

class Courses extends Model {}

Courses.init(
  {
    courseId: {
      primaryKey: true,
      type: DataTypes.STRING(),
    },
    coursename: {
      unique: true,
      allowNull: false,
      type: DataTypes.STRING(),
    },
    coursecode: {
      unique: true,
      allowNull: false,
      type: DataTypes.STRING(),
    },
  },
  {
    timestamps: true,
    paranoid: true,
    sequelize,
  }
);
module.exports = Courses;
