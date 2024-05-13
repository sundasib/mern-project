const { Model, DataTypes } = require("sequelize");
//const database = require("../../bin/dbConnection");
const sequelize = require("../../bin/dbConnection");
class Users extends Model {}

Users.init(
  {
    userId: {
      primaryKey: true,
      type: DataTypes.STRING(),
    },
    username: {
      unique: true,
      type: DataTypes.STRING(34),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(),
      allowNull: false,
    },
  },
  {
    timestamps: true,
    paranoid: true,
    //sequelize: database,
    sequelize,
  }
);
module.exports = Users;
