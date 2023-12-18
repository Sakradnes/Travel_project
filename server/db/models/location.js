'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Location extends Model {
    static associate({ Event, Route }) {
      this.hasMany(Route, { foreignKey: 'locationId' });
      this.hasMany(Event, { foreignKey: 'locationId' });
    }
  }
  Location.init(
    {
      name: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: 'Location',
    }
  );
  return Location;
};
