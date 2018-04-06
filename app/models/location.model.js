'use strict'

const sequelize = require('sequelize')
const Location = sequelize.define('location', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  city: {
    type: Sequelize.STRING,
    allowNull: false
  },
  state: {
    type: Sequelize.STRING,
    allowNull: false
  },
  colony: {
    type: Sequelize.STRING,
    allowNull: false
  },
  street: {
    type: Sequelize.STRING,
    allowNull: false
  },
  postalCode: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
})

module.exports = location
