const { Medico } = require('../models');

const deleteMedic = async (medicName) => {
  await Medico.destroy(medicName);
  return 'Medic deleted';
}

module.exports = { deleteMedic };