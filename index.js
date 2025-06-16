const sequelize = require("../config/db");
const User = require("./user.model");
const Store = require("./store.model");
const Rating = require("./rating.model");

User.hasMany(Rating);
Store.hasMany(Rating);
Rating.belongsTo(User);
Rating.belongsTo(Store);

module.exports = { sequelize, User, Store, Rating };
