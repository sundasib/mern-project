const { Model, DataTypes } = require("sequelize");
const sequelize = require("../../bin//dbConnection");

class Address extends Model {}

Address.init(
  {
    addressId: {
      primaryKey: true,
      type: DataTypes.STRING(),
    },
    address: {
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
module.exports = Address;
