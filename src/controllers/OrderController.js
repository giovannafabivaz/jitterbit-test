const { Order, Item } = require('../models');

// cria um novo pedido
exports.createOrder = async (req, res) => {
  try {
    const data = req.body; // recebe o JSON enviado pelo Postman

    // traduz os campos em português (origem) para inglês (destino/banco)
    const newOrder = await Order.create({
      orderId: data.numeroPedido,       // numeroPedido -> orderId
      value: data['valor Total'],       // valor Total -> value
      creationDate: data.dataCriacao,   // dataCriacao -> creationDate
      
      // Mapeia cada item do array 'items'
      items: data.items.map(item => ({
        productId: item.idItem,         // idItem -> productId
        quantity: item.quantidadeltem,  // quantidadeltem -> quantity
        price: item.valorltem           // valorltem -> price
      }))
    }, {
      // 'include' avisa ao Sequelize para salvar os itens na tabela Items ao mesmo tempo
      include: [{ model: Item, as: 'items' }]
    });
   
    // retorna o pedido criado com sucesso (Status 201)
    res.status(201).json(newOrder);
  } catch (error) {
    console.error('Erro ao criar pedido:', error);
    res.status(500).json({ error: 'Erro interno ao salvar pedido.' });
  }
};

// busca um pedido específico pelo ID
exports.getOrderById = async (req, res) => {
  try {
    // busca no banco usando o parâmetro vindo da URL
    const order = await Order.findByPk(req.params.orderId, {
      include: [{ model: Item, as: 'items' }] // traz os itens junto com o pedido
    });

    if (!order) {
      return res.status(404).json({ message: "Pedido não encontrado." });
    }

    res.json(order);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar pedido.' });
  }
};