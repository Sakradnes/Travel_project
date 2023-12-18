'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    static associate({ Location }) {
      this.belongsTo(Location, { foreignKey: 'locationId' });
    }
  }
  Event.init(
    {
      name: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      date: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      img: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      description: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      locationId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Locations',
          key: 'id',
        },
      },
    },
    {
      sequelize,
      modelName: 'Event',
    }
  );
  return Event;
};
