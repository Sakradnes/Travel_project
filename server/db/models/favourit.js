'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Favourites  extends Model {
    static associate({Rout, User}) {
      this.belongsTo(Rout, { foreignKey: 'routId' });
      this.belongsTo(User, { foreignKey: 'userId' });

    }
  }
  Favourites.init(
    {
      routId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Routs',
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
  return Favourites;
};
