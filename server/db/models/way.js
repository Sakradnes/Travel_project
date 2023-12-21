'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Way extends Model {
    static associate({ Route, ImgWayAlbum }) {
      this.belongsTo(Route, { foreignKey: 'routeId' });
      this.hasMany(ImgWayAlbum, { foreignKey: 'wayId' });
    }
  }
  Way.init(
    {
      routeId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Routes',
          key: 'id',
        },
      },
      path: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      coordinateLatitude: {
        allowNull: false,
        type: DataTypes.FLOAT,
      },
      coordinateLongitude: {
        allowNull: false,
        type: DataTypes.FLOAT,
      },
      name: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      description: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: 'Way',
    }
  );
  return Way;
};
