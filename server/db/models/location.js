'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Location extends Model {
    static associate({ Event, Putt }) {
      this.hasMany(Putt, { foreignKey: 'locationId' });
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
