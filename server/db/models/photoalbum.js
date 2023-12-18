'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class photoAlbum extends Model {
    static associate({User}) {
      this.belongsTo(User, { foreignKey: 'userId' });
    }
  }
  photoAlbum.init(
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
      modelName: 'photoAlbum',
    }
  );
  return photoAlbum;
};
