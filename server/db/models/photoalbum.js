'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PhotoAlbum extends Model {
    static associate({ User }) {
      this.belongsTo(User, { foreignKey: 'userId' });
    }
  }
  PhotoAlbum.init(
    {
      name: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      img: {
        allowNull: false,
        type: DataTypes.TEXT,
        onDelete: 'cascade',
      },
    },
    {
      sequelize,
      modelName: 'PhotoAlbum',
    }
  );
  return PhotoAlbum;
};
