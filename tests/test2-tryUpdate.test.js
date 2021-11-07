const frisby = require('frisby');
const shell = require('shelljs');

const url = 'http://localhost:3000';

describe('2 - Sua aplicação deve ter o endpoint PATCH `/updatemedic/:id`', () => {
  beforeEach(() => {
    shell.exec('npx sequelize-cli db:drop');
    shell.exec('npx sequelize-cli db:create');
    shell.exec('npx sequelize-cli db:migrate')
  });

  it('Será validado que é possível alterar informações do medico com sucesso', async () => {
    await frisby
      .post(`${url}/createmedic`,
        {
          name: "mariazinha",
          CRM: 423442,
          Telefone: 6566565,
          Celular: 36636366,
          Cep: "06786360",
          Especialidade: ["cardiaco", "geral"]
        })
      .expect('status', 201)
      .then((response) => {
        const { json } = response;
        expect(json.message).toBe('Created');
      });

      await frisby
      .patch(`${url}/updatemedic/1`,
        {
          name: "joaozinho",
          CRM: 121212,
          Telefone: 12345678,
          Celular: 87654321,
          Cep: "06786360",
          Especialidade: ["bebe", "ortopedia"]
        })
      .expect('status', 200)
      .then((response) => {
        const { json } = response;
        expect(json.message).toBe('Update sucess');
      });

      // poderia ter colocado todos os testes de verificação do objeto aqui, para economizar tempo não colocarei
  });

});