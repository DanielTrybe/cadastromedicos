const shell = require('shelljs');
const { createMedicModel } = require('../../Model/createMedicModel');
const { expect } = require('chai');

describe('Insere um novo medico no DB', () => {
  beforeEach(() => {
    shell.exec('npx sequelize-cli db:drop');
    shell.exec('npx sequelize-cli db:create');
    shell.exec('npx sequelize-cli db:migrate')
  });

  const req = { 
      body: {
        name: "mariazinha",
        CRM: "423442",
        Telefone: "6566565",
        Celular: "36636366",
        Adress: "logradouro: Rua Milton Martins Moura - Vila Francisco Remeikis - Taboão da Serra, SP",
        Cep: "06786360",
        Especialidade: ["cardiaco", "geral"]
        }
      }

    it('Verifica se o retorno da função é "true"', async () => {
      const response = await createMedicModel(req);
      expect(response).to.be.true;

    });

});