'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Putt extends Model {
    static associate({
      User,
      Way,
      Comments,
      Favourites,
      Rating,
      Option,
      Location,
    }) {
      this.belongsTo(User, { foreignKey: 'userId' });
      this.hasMany(Way, { foreignKey: 'putId' });
      this.belongsTo(Location, { foreignKey: 'locationId' });
      this.hasMany(Comments, { foreignKey: 'putId' });
      this.hasMany(Favourites, { foreignKey: 'putId' });
      this.hasMany(Rating, { foreignKey: 'putId' });
      this.belongsTo(Option, { foreignKey: 'optionId' });
    }
  }
  Putt.init(
    {
      name: {
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
      optionId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Options',
          key: 'id',
        },
      },
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
    },
    {
      sequelize,
      modelName: 'Putt',
    }
  );
  return Putt;
};
