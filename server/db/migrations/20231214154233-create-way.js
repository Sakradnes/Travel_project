'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Ways', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      routId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Routs',
          key: 'id',
        },
      },
      path: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      name: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      description: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Ways');
  },
};
