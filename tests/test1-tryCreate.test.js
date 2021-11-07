const frisby = require('frisby');
const shell = require('shelljs');

const url = 'http://localhost:3000';

describe('1 - Sua aplicação deve ter o endpoint POST `/createmedic`', () => {
  beforeEach(() => {
    shell.exec('npx sequelize-cli db:drop');
    shell.exec('npx sequelize-cli db:create');
    shell.exec('npx sequelize-cli db:migrate')
  });

  it('Será validado que é possível cadastrar um usuário com sucesso', async () => {
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
  });

  it('Será validado que não é possível cadastrar usuário com o campo `name` maior que 120 caracteres', async () => {
    await frisby
      .post(`${url}/createmedic`,
        {
          name: "Daniel Daniel Daniel Daniel Daniel Daniel Daniel Daniel Daniel Daniel Daniel Daniel Daniel Daniel Daniel Daniel Daniel Daniel",
          CRM: 423442,
          Telefone: 6566565,
          Celular: 36636366,
          Cep: "06786360",
          Especialidade: ["cardiaco", "geral"]
        })
      .expect('status', 400)
      .then((response) => {
        const { json } = response;
        expect(json.message).toBe('"Name" length must be on max 120 characters long and be a String');
      });
  });

  it('Será validado que não é possível cadastrar usuário com o campo `CRM` maior que 7 caracteres', async () => {
    await frisby
      .post(`${url}/createmedic`,
        {
          name: "mariazinha",
          CRM: 12345678,
          Telefone: 6566565,
          Celular: 36636366,
          Cep: "06786360",
          Especialidade: ["cardiaco", "geral"]
        })
      .expect('status', 400)
      .then((response) => {
        const { json } = response;
        expect(json.message).toBe('"CRM" must be at least 7 max characters');
      });
  });

  it('Será validado que não é possível cadastrar usuário com o campo `CRM` com formato de string`', async () => {
    await frisby
      .post(`${url}/createmedic`,
        {
          name: "mariazinha",
          CRM: "423446",
          Telefone: 6566565,
          Celular: 36636366,
          Cep: "06786360",
          Especialidade: ["cardiaco", "geral"]
        })
      .expect('status', 400)
      .then((response) => {
        const { json } = response;
        expect(json.message).toBe('"CRM" must be a number');
      });
  });

  it('Será validado que o campo `name` é obrigatório', async () => {
    await frisby
      .post(`${url}/createmedic`,
        {
          CRM: 423446,
          Telefone: 6566565,
          Celular: 36636366,
          Cep: "06786360",
          Especialidade: ["cardiaco", "geral"]
        })
      .expect('status', 400)
      .then((response) => {
        const { json } = response;
        expect(json.message).toBe('"name" is required');
      });
  });

  it('Será validado que o campo `CRM` é obrigatório', async () => {
    await frisby
      .post(`${url}/createmedic`,
        {
          name: "mariazinha",
          Telefone: 6566565,
          Celular: 36636366,
          Cep: "06786360",
          Especialidade: ["cardiaco", "geral"]
        })
      .expect('status', 400)
      .then((response) => {
        const { json } = response;
        expect(json.message).toBe('"CRM" is required');
      });
  });

  it('Será validado que não é possível cadastrar um usuário sem o campo "Telefone"', async () => {
    await frisby
      .post(`${url}/createmedic`,
        {
          name: "mariazinha",
          CRM: 423442,
          Celular: 36636366,
          Cep: "06786360",
          Especialidade: ["cardiaco", "geral"]
        })
      .expect('status', 400)
      .then((response) => {
        const { json } = response;
        expect(json.message).toBe('"Telefone and Celular" is required');
      });
  });

  it('Será validado que não é possível cadastrar um usuário sem o campo "Celular"', async () => {
    await frisby
      .post(`${url}/createmedic`,
        {
          name: "mariazinha",
          CRM: 423442,
          Telefone: 36636366,
          Cep: "06786360",
          Especialidade: ["cardiaco", "geral"]
        })
      .expect('status', 400)
      .then((response) => {
        const { json } = response;
        expect(json.message).toBe('"Telefone and Celular" is required');
      });
  });

  it('Será validado que não é possível cadastrar um usuário se o campo "Celular" for string', async () => {
    await frisby
      .post(`${url}/createmedic`,
        {
          name: "mariazinha",
          CRM: 423442,
          Telefone: 36636366,
          Celular: "36636366",
          Cep: "06786360",
          Especialidade: ["cardiaco", "geral"]
        })
      .expect('status', 400)
      .then((response) => {
        const { json } = response;
        expect(json.message).toBe('"Telefone and Celular" must be a String');
      });
  });

  it('Será validado que não é possível cadastrar um usuário se o campo "Telefone" for string', async () => {
    await frisby
      .post(`${url}/createmedic`,
        {
          name: "mariazinha",
          CRM: 423442,
          Telefone: "36636366",
          Celular: 36636366,
          Cep: "06786360",
          Especialidade: ["cardiaco", "geral"]
        })
      .expect('status', 400)
      .then((response) => {
        const { json } = response;
        expect(json.message).toBe('"Telefone and Celular" must be a String');
      });
  });

  it('Será validado que não é possível cadastrar um usuário sem o campo "Cep"', async () => {
    await frisby
      .post(`${url}/createmedic`,
        {
          name: "mariazinha",
          CRM: 423442,
          Telefone: 36636366,
          Celular: 36636366,
          Especialidade: ["cardiaco", "geral"]
        })
      .expect('status', 400)
      .then((response) => {
        const { json } = response;
        expect(json.message).toBe('"Cep" is required');
      });
  });

  it('Será validado que não é possível cadastrar um usuário sem o campo "Especialidade"', async () => {
    await frisby
      .post(`${url}/createmedic`,
        {
          name: "mariazinha",
          CRM: 423442,
          Telefone: 36636366,
          Celular: 36636366,
          Cep: "06786360",
        })
      .expect('status', 400)
      .then((response) => {
        const { json } = response;
        expect(json.message).toBe('"Especialidade" is required');
      });
  });

  it('Será validado que não é possível cadastrar um usuário se o campo "Especialidade" não for um array de strings', async () => {
    await frisby
      .post(`${url}/createmedic`,
        {
          name: "mariazinha",
          CRM: 423442,
          Telefone: 36636366,
          Celular: 36636366,
          Cep: "06786360",
          Especialidade: [1, 10]
        })
      .expect('status', 400)
      .then((response) => {
        const { json } = response;
        expect(json.message).toBe('"Especialidade" must be a array with strings');
      });
  });
});