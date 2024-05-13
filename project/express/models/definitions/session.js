const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../bin/dbConnection");

class Session extends Model {}

Session.init(
  {
    sessionId: {
      primaryKey: true,
      type: DataTypes.STRING(),
    },
    token: {
      unique: true,
      allowNull: false,
      type: DataTypes.STRING(1000),
    },
  },
  {
    timestamps: true,
    paranoid: true,
    sequelize,
  }
);
module.exports = Session;
