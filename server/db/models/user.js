"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate({ Comments, Favourites, Route, PhotoAlbum, Rating }) {
      this.hasMany(Favourites, { foreignKey: "userId" });
      this.hasMany(Comments, { foreignKey: "userId" });
      this.hasMany(Route, { foreignKey: "userId" });
      this.hasMany(PhotoAlbum, { foreignKey: "userId" });
      this.hasMany(Rating, { foreignKey: "userId" });
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
        defaultValue: "/img/2070691.png",
        type: DataTypes.TEXT,
      },
      isAdmin: {
        allowNull: false,
        defaultValue: false,
        type: DataTypes.BOOLEAN,
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
