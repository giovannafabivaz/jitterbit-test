// configuração e conexão com banco de dados MySQL

const { Sequelize } = require('sequelize');

// deixei como 'sua_senha' para não compartilhar dados sensíveis
const sequelize = new Sequelize('jitterbit_db', 'root', '@4nn4v01g04032005', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false
});

module.exports = sequelize;