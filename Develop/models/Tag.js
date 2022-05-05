const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Tag extends Model {}

Tag.init(
  {
    // define columns
    id: {

      type: DataTypes.INTEGER,
      allowNull: false,
      primarykey: true,
      autoIncrement: true,
    },
    tagName: {
      type: DataTypes.STRING,
      },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;
