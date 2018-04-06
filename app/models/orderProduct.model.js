'use strict'

const sequelize = require('sequelize');
const OrderProduct = sequelize.define('orderProduct', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  unitPrice: {
    type: Sequelize.FLOAT,
    allowNull: false
  },
  discount: {
    type: Sequelize.FLOAT,
    allowNull: true
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  total: {
    type: Sequelize.FLOAT,
    allowNull: false
  }
})

module.exports = OrderProduct

// TODO: Relate OrderProduct with Product
