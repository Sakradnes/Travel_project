'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ImgWayAlbum extends Model {
    static associate({Way}) {
      this.belongsTo(Way, { foreignKey: 'wayId' });

    } 
  }
  ImgWayAlbum.init(
    {
      wayId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Ways',
          key: 'id',
        },
      },
      img: {
        allowNull: false,
        type: DataTypes.TEXT,
        onDelete: 'cascade',
      },
    },
    {
      sequelize,
      modelName: 'ImgWayAlbum',
    }
  );
  return ImgWayAlbum;
};
