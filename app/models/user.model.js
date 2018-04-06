'use strict'

const sequelize = require('sequelize')
const User = sequelize.define('user', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  preferredPayment: {
    type: Sequelize.ENUM('card', 'paypal', 'cash'),
    allowNull: false,
    defaultValue: 'cash'
  }
})

module.exports = User

// TODO: Relate user with paypalAccount and cardAccount
