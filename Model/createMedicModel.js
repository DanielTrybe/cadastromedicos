const { Medico } = require('../models');
const axios = require('axios');

const createMedicModel = async (req) => {
  const { name, CRM, Telefone, Celular, Cep, Especialidade } = req.body;
  const Especially = Especialidade.join(', ');
  const { data: { logradouro, bairro, localidade, uf} } = await axios.get(`https://viacep.com.br/ws/${Cep}/json/`);
  const Adress = `logradouro: ${logradouro} - ${bairro} - ${localidade}, ${uf}`;
  await Medico.create({ name, CRM, Telefone, Celular, Cep, Adress, Especialidade: Especially });
  return true;
};

module.exports = { createMedicModel };
