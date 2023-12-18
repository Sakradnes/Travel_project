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
        allowNull: true,
        type: DataTypes.TEXT,
      },
      img: {
        allowNull: true,
        type: DataTypes.TEXT,
        onDelete: 'cascade',
      },
      userId:{
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
      }
    },
    {
      sequelize,
      modelName: 'PhotoAlbum',
    }
  );
  return PhotoAlbum;
};
