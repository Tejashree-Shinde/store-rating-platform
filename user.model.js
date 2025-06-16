const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const User = sequelize.define("User", {
  name: { type: DataTypes.STRING(60), allowNull: false },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
  address: { type: DataTypes.STRING(400) },
  role: {
    type: DataTypes.ENUM("admin", "user", "store_owner"),
    defaultValue: "user",
  },
});

module.exports = User;
