const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');
const Product = require('./Product.js');

const ProductTag = require('./ProductTag')

class Tag extends Model {}

Tag.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    tag_name: {
      type: DataTypes.STRING
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);
Tag.hasMany(ProductTag)
ProductTag.belongsTo(Tag)

Product.belongsToMany(Tag, { through: ProductTag })
Tag.belongsToMany(Product, { through: ProductTag })
module.exports = Tag;
