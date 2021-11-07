const { findMedicModelName, findMedicModelCRM, findMedicModelTelefone, findMedicModelCelular, findMedicModelCep, findMedicModelEspecialist } = require('../Model/findMedicModel');

const findByMedic = async (req) => {
  const { name, crm, telefone, celular, cep } = req.headers;
  if (name) {
    const find = await findMedicModelName(name);
    const notfind = { status: 400, message: "Medic not found" };
    const object = { status: 200, message: find };
    const send = find === null ? notfind : object;
    return send;
  } 
  if (crm) {
    const find = await findMedicModelCRM(crm);
    const notfind = { status: 400, message: "Medic not found" };
    const object = { status: 200, message: find };
    const send = find === null ? notfind : object;
    return send;
  } 
  if (telefone) {
    const find = await findMedicModelTelefone(telefone);
    const notfind = { status: 400, message: "Medic not found" };
    const object = { status: 200, message: find };
    const send = find === null ? notfind : object;
    return send;
  } 
  if (celular) {
    const find = await findMedicModelCelular(celular);
    const notfind = { status: 400, message: "Medic not found" };
    const object = { status: 200, message: find };
    const send = find === null ? notfind : object;
    return send;
  } 
  if (cep) {
    const find = await findMedicModelCep(cep);
    const notfind = { status: 400, message: "Medic not found" };
    const object = { status: 200, message: find };
    const send = find === null ? notfind : object;
    return send;
  }

  return { status: 400, message: "Need to have one argument" };
};

module.exports = { findByMedic }
