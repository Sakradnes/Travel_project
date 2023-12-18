'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Way extends Model {
    static associate({ Rout }) {
      this.belongsTo(Rout, { foreignKey: 'routId' });
    }
  }
  Way.init(
    {
      routId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Routs',
          key: 'id',
        },
      },
      path: {
        allowNull: false,
        type: DataTypes.TEXT,
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
