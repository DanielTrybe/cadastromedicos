const Medico = (sequelize, DataTypes) => {
  const medic = sequelize.define('Medico', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING
    },
    CRM: {
      type: DataTypes.INTEGER
    },
    Telefone: {
      type: DataTypes.INTEGER
    },
    Celular: {
      type: DataTypes.INTEGER
    },
    Cep: {
      type: DataTypes.STRING
    },
    Adress: {
      type: DataTypes.STRING
    },
    Especialidade: {
      type: DataTypes.STRING
    },
  }, {
    timestamps: false,
  });
  return medic;
};

module.exports = Medico;