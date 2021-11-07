const { Medico } = require('../models');

const findMedicModelName = async (name) => {
  const medic = await Medico.findOne({ where: { name }});
  return medic;
};

const findMedicModelCRM = async (CRM) => {
  const medic = await Medico.findOne({ where: { CRM }});
  return medic;
};

const findMedicModelTelefone = async (Telefone) => {
  const medic = await Medico.findOne({ where: { Telefone }});
  return medic;
};

const findMedicModelCelular = async (Celular) => {
  const medic = await Medico.findOne({ where: { Celular }});
  return medic;
};

const findMedicModelCep = async (Cep) => {
  const medic = await Medico.findOne({ where: { Cep }});
  return medic;
};

module.exports = { findMedicModelName, findMedicModelCRM, findMedicModelTelefone, findMedicModelCelular, findMedicModelCep };