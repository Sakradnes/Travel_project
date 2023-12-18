'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Option extends Model {
    static associate({ Route }) {
      this.hasMany(Route, { foreignKey: 'optionId' });
    }
  }
  Option.init(
    {
      type: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: 'Option',
    }
  );
  return Option;
};
