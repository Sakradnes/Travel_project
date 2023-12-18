'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rout extends Model {
    static associate({User, Way, Location, Comment, Favorit, Rating, Option}) {
      this.hasMany(User, { foreignKey: 'routId' });
      this.hasMany(Way, { foreignKey: 'routId' });
      this.hasMany(Location, { foreignKey: 'routId' });
      this.hasMany(Comment, { foreignKey: 'routId' });
      this.hasMany(Favorit, { foreignKey: 'routId' });
      this.hasMany(Rating, { foreignKey: 'routId' });
      this.hasMany(Option, { foreignKey: 'routId' });
    }
  }
  Rout.init(
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
      modelName: 'Rout',
    }
  );
  return Rout;
};
