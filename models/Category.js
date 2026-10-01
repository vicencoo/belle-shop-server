const Sequelize = require("sequelize");
const sequelize = require("../config/database");

const Category = sequelize.define("Category", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: { type: Sequelize.STRING, allowNull: false, unique: true },
  slug: { type: Sequelize.TEXT, allowNull: false, unique: true },
  description: { type: Sequelize.TEXT, allowNull: true },
  logo_url: { type: Sequelize.STRING },
  tablename: "categories",
  underscored: true,
  timestamps: true,
});

module.exports = Category;
