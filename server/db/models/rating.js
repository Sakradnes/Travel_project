'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rating extends Model {
    static associate({ User, Putt }) {
      this.belongsTo(User, { foreignKey: 'userId' });
      this.belongsTo(Putt, { foreignKey: 'putId' });
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
      putId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Puts',
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
