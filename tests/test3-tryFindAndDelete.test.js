const frisby = require('frisby');
const shell = require('shelljs');

const url = 'http://localhost:3000';

describe('3 - Sua aplicação deve ter o endpoint GET `/findmedic`', () => {
  beforeEach(() => {
    shell.exec('npx sequelize-cli db:drop');
    shell.exec('npx sequelize-cli db:create');
    shell.exec('npx sequelize-cli db:migrate')
  });

  it('Será validado que é possível encontrar as informações do medico com sucesso com o campo "name"', async () => {
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
      .setup({
        request: {
          headers: {
            name: 'mariazinha',
            'Content-Type': 'application/json',
          },
        },
      })
      .get(`${url}/findmedic`)
      .expect('status', 200)
      .then((response) => {
        const { json } = response;
        console.log(json)
        expect(json.medic).toStrictEqual({
          name: "mariazinha",
          CRM: 423442,
          Telefone: 6566565,
          Celular: 36636366,
          Cep: "06786360",
          Adress: "logradouro: Rua Milton Martins Moura - Vila Francisco Remeikis - Taboão da Serra, SP",
          Especialidade: "cardiaco, geral",
          id: 1
        }
      );
      });

      
      
  });

  it('Será validado que é possível encontrar as informações do medico com sucesso com o campo "CRM"', async () => {
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
      .setup({
        request: {
          headers: {
            crm: 423442,
            'Content-Type': 'application/json',
          },
        },
      })
      .get(`${url}/findmedic`)
      .expect('status', 200)
      .then((response) => {
        const { json } = response;
        console.log(json)
        expect(json.medic).toStrictEqual({
          name: "mariazinha",
          CRM: 423442,
          Telefone: 6566565,
          Celular: 36636366,
          Cep: "06786360",
          Adress: "logradouro: Rua Milton Martins Moura - Vila Francisco Remeikis - Taboão da Serra, SP",
          Especialidade: "cardiaco, geral",
          id: 1
        }
      );
      });      
  });

});