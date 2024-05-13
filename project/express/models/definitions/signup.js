const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../bin/dbConnection");

class signup extends Model {}
signup.init(
  {
    email: {
      primaryKey: true,
      type: DataTypes.STRING(),
      allowNull: false,
    },
    password: {
      unique: true,
      allowNull: false,
      type: DataTypes.STRING(),
    },
    username: {
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
module.exports = signup;
