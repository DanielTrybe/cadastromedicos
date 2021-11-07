const { Medico } = require('../models');
const axios = require('axios');

const updateMedic = async (req) => {
  const { id } = req.params;
  const { name, CRM, Telefone, Celular, Cep, Especialidade } = req.body;
  const Especially = Especialidade.join(', ');

  const { data: { logradouro, bairro, localidade, uf } } = await axios.get(`https://viacep.com.br/ws/${Cep}/json/`);
  const Adress = `logradouro: ${logradouro} - ${bairro} - ${localidade}, ${uf}`;

  await Medico.update({ name, CRM, Telefone, Celular, Cep, Adress, Especialidade: Especially }, { where: { id } });
  return "Update sucess"
}

module.exports = { updateMedic };