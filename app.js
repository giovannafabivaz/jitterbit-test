const express = require('express');
const { sequelize } = require('./src/models'); // importa a conexão do banco
const orderController = require('./src/controllers/OrderController'); // importa a lógica

const app = express();

// middleware para que o Express consiga ler JSON no corpo das requisições
app.use(express.json());

// sincroniza as tabelas com o MySQL antes de ligar o servidor
sequelize.sync({ alter: true })
  .then(() => console.log('Base de dados MySQL sincronizada.'))
  .catch(err => console.error('Erro ao ligar ao MySQL:', err));


// rota POST para criar pedido
app.post('/order', orderController.createOrder);

// rota GET para buscar pedido pelo número (ex: /order/v100)
app.get('/order/:orderId', orderController.getOrderById);

// configura a porta e inicia o servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor a correr em http://localhost:${PORT}`);
});