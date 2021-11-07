const express = require('express');

const app = express();
app.use(express.json());

const { createMedicController, findMedicController, deleteMedicController, updateMedicController } = require('./controllers/medicController');

const {  
  verifyName,
  verifyCRM,
  verifyPhones,
  verifyCep,
  verifyEspecialist,
  verifyIfExists,
  verifyIfNotExists,
  } = require('./middlewares/medicMiddlewares');

app.post('/createmedic', verifyName, verifyCRM, verifyPhones, verifyCep, verifyEspecialist, verifyIfExists, createMedicController);
app.get('/findmedic', findMedicController);
app.delete('/deletemedic', verifyName, verifyIfNotExists, deleteMedicController);
app.patch('/updatemedic/:id', verifyName, verifyCRM, verifyPhones, verifyCep, verifyEspecialist, updateMedicController);

app.listen(3000, () => console.log('ouvindo porta 3000!'));