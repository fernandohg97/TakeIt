'use strict'

const sequelize = require('sequelize');
const PaypalAccount = sequelize.define('paypalAccount', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = PaypalAccount
