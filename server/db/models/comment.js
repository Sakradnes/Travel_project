'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comments extends Model {
    static associate({User, Rout}) {
      this.hasMany(Rout, {foreignKey: ' routId'});
      this.belongsTo(User, {foreignKey: 'userId'});
    }
  }
  Comments.init(
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
      message: {
        allowNull: false,
        type: DataTypes.TEXT,
        onDelete: 'cascade',
      },
    },
    {
      sequelize,
      modelName: 'Comments',
    }
  );
  return Comments;
};
