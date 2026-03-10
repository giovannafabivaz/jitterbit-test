const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // importa a conexão configurada

// define a tabela 'Order' (Pedidos) no MySQL
const Order = sequelize.define('Order', {
  // PK: o número do pedido que vem do JSON
  orderId: { 
    type: DataTypes.STRING, 
    primaryKey: true,
    allowNull: false 
  },
  // valor total do pedido
  value: { 
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false 
  },
  // data de criação do pedido
  creationDate: { 
    type: DataTypes.DATE,
    allowNull: false 
  }
}, { 
  timestamps: false, // desativa as colunas 'createdAt' e 'updatedAt' automáticas
  tableName: 'Orders' // nome exato da tabela no banco
});

// define a tabela 'Item' (Produtos do pedido)
const Item = sequelize.define('Item', {
  productId: { 
    type: DataTypes.INTEGER,
    allowNull: false
  },
  quantity: { 
    type: DataTypes.INTEGER,
    allowNull: false
  },
  price: { 
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  }
}, { 
  timestamps: false,
  tableName: 'Items'
});

// relacionamento: Um Pedido (Order) tem muitos Itens
Order.hasMany(Item, { as: 'items', foreignKey: 'orderId' });
Item.belongsTo(Order, { foreignKey: 'orderId' });

module.exports = { sequelize, Order, Item };