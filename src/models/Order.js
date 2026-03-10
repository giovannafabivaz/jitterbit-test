const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  orderId: { type: String, required: true, unique: true },
  value: Number,
  creationDate: { type: Date, default: Date.now },
  items: [{
    productId: Number,
    quantity: Number,
    price: Number
  }]
});

module.exports = mongoose.model('Order', OrderSchema);