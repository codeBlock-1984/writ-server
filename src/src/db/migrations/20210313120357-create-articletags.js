'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('articletags', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id: {
        type: Sequelize.INTEGER
      },
      articleid: {
        type: Sequelize.INTEGER
      },
      tagid: {
        type: Sequelize.INTEGER
      },
      recordstatus: {
        type: Sequelize.INTEGER
      },
      createdat: {
        type: Sequelize.DATE
      },
      updatedat: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('articletags');
  }
};