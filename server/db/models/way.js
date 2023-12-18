'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Way extends Model {
    static associate({ Putt, ImgWayAlbum }) {
      this.belongsTo(Putt, { foreignKey: 'putId' });
      this.hasMany(ImgWayAlbum, { foreignKey: 'wayId' });
    }
  }
  Way.init(
    {
      putId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Putts',
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
