'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Comment, Favorite, Rout, photoAlbum, Rating }) {
      this.hasMany(Favorite, { foreignKey: '' });
      this.hasMany(Comment, { foreignKey: 'userId' });
      this.hasMany(Rout, { foreignKey: 'userId' });
      this.hasMany(photoAlbum, { foreignKey: 'userId' });
      this.hasMany(Rating, { foreignKey: 'userId' });
    }
  }
  User.init(
    {
      name: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      password: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      email: {
        allowNull: false,
        unique: true,
        type: DataTypes.TEXT,
      },
      avatar: {
        allowNull: false,
        defaultValue: '/img/2070691.png',
        type: DataTypes.TEXT,
      },
      isAdmin: {
        allowNull: false,
        defaultValue: false,
        type: DataTypes.BOOLEAN,
      },
      photoAlbom: {
        allowNull: false,
        type: DataTypes.INTEGER,
        onDelete: 'cascade',
      },
      routId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: 'Routs',
          key: 'id',
        },
      },
    },
    {
      sequelize,
      modelName: 'User',
    }
  );
  return User;
};
