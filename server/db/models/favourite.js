'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Favourite extends Model {
    static associate({ Route, User }) {
      this.belongsTo(Route, { foreignKey: 'routeId' });
      this.belongsTo(User, { foreignKey: 'userId' });
    }
  }
  Favourite.init(
    {
      routId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Routes',
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
      modelName: 'Favourites',
    }
  );
  return Favourite;
};
