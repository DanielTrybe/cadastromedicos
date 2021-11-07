'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Medicos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      CRM: {
        type: Sequelize.INTEGER
      },
      Telefone: {
        type: Sequelize.INTEGER
      },
      Celular: {
        type: Sequelize.INTEGER
      },
      Cep: {
        type: Sequelize.STRING
      },
      Adress: {
        type: Sequelize.STRING
      },
      Especialidade: {
        type: Sequelize.STRING
      },
    });
  },
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('Medicos');
  }
};