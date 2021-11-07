const { createMedicModel } = require('../Model/createMedicModel');
const { deleteMedic } = require('../Model/deleteMedic');
const { updateMedic } = require('../Model/updateMedicModel');

const { findByMedic } = require('../services/typesOfSearch');

const createMedicController = async (req, res) => {
  await createMedicModel(req);
  return res.status(201).json({ message: 'Created' });
};

const findMedicController = async (req, res) => {
  const medic = await findByMedic(req);
  return res.status(medic.status).json({ medic: medic.message });
}

const deleteMedicController = async (req, res) => {
  const { name } = req.body;
  const deleteM = await deleteMedic({ where: { name } });
  res.status(200).json({ message: deleteM });
}

const updateMedicController = async (req, res) => {
  const update = await updateMedic(req);
  res.status(200).json({ message: update });
}

module.exports = { createMedicController, findMedicController, deleteMedicController, updateMedicController };