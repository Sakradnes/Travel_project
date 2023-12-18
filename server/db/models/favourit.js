'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Favourit extends Model {
    static associate({ Putt, User }) {
      this.belongsTo(Putt, { foreignKey: 'putId' });
      this.belongsTo(User, { foreignKey: 'userId' });
    }
  }
  Favourit.init(
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
  return Favourit;
};
