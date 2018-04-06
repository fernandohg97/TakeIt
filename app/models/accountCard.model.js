'use strict'

const sequelize = require('sequelize')
const AccountCard = sequelize.define('accountCard', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  cardNumber: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  securityCode: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  expiryDate: {
    type: Sequelize.DATE,
    allowNull: false
  }
})

module.exports = AccountCard
