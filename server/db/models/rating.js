'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rating extends Model {
    static associate({ User, Route }) {
      this.belongsTo(User, { foreignKey: 'userId' });
      this.belongsTo(Route, { foreignKey: 'routId' });
    }
  }
  Rating.init(
    {
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
      routId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Routs',
          key: 'id',
        },
      },
      rating: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: 'Rating',
    }
  );
  return Rating;
};
