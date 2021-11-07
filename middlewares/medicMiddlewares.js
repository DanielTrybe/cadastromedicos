
const { findMedicModelName } = require('../Model/findMedicModel');

const verifyName = (req, res, next) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ message: '"name" is required'});
  if (typeof name !== 'string' || name.length > 120) {
    return res.status(400).json({ 
      message: '"Name" length must be on max 120 characters long and be a String' });
  }
  next();
};

const verifyCRM = async (req, res, next) => {
  const { CRM } = req.body;
  if (!CRM) return res.status(400).json({ message: '"CRM" is required' });
  if (typeof CRM !== "number") return res.status(400).json({ message: '"CRM" must be a number' });
  if (CRM.toString().length > 7) return res.status(400).json({ message: '"CRM" must be at least 7 max characters' });
  next();
};

const verifyPhones = (req, res, next) => {
  const { Telefone, Celular } = req.body;
  if (!Telefone || !Celular) return res.status(400).json({ message: '"Telefone and Celular" is required' });
  if (typeof Telefone !== "number" || typeof Celular !== "number") {
    return res.status(400).json({ message: '"Telefone and Celular" must be a String' });
  }
  next();
};

const verifyCep = (req, res, next) => {
  const { Cep } = req.body;
  if (!Cep) return res.status(400).json({ message: '"Cep" is required' });
  if (typeof Cep !== "string") return res.status(400).json({ message: '"Cep" must be a String' });
  next();
};

const verifyEspecialist = (req, res, next) => {
  const { Especialidade } = req.body;
  if (!Especialidade) return res.status(400).json({ message: '"Especialidade" is required' });
  const verifyArray = Especialidade.find((item) => typeof item !== "string");
  if (verifyArray) return res.status(400).json({ message: '"Especialidade" must be a array with strings' });
  next();
};

const verifyIfExists = async (req, res, next) => {
  const { name } = req.body
  const exists = await findMedicModelName(name);
  if (exists) return res.status(400).json({ message: 'This medic already exists' })
  next();
}

const verifyIfNotExists = async (req, res, next) => {
  const { name } = req.body
  const exists = await findMedicModelName(name);
  if (!exists) return res.status(400).json({ message: 'Medic not found, please register one' })
  next();
}

module.exports = { 
  verifyName, 
  verifyCRM, 
  verifyPhones, 
  verifyCep,
  verifyEspecialist,
  verifyIfExists,
  verifyIfNotExists,
};