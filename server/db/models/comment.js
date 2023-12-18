'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    static associate({ User, Putt }) {
      this.belongsTo(Putt, { foreignKey: 'putId' });
      this.belongsTo(User, { foreignKey: 'userId' });
    }
  }
  Comment.init(
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
          model: 'Putts',
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
  return Comment;
};
