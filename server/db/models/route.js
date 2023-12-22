'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Route extends Model {
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
      this.hasMany(Way, { foreignKey: 'routeId' });
      this.belongsTo(Location, { foreignKey: 'locationId' });
      this.hasMany(Comments, { foreignKey: 'routeId' });
      this.hasMany(Favourites, { foreignKey: 'routeId' });
      this.hasMany(Rating, { foreignKey: 'routeId' });
      this.belongsTo(Option, { foreignKey: 'optionId' });
    }
  }
  Route.init(
    {
      name: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      rout: {
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
      modelName: 'Route',
    }
  );
  return Route;
};
