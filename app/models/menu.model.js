'use strict'

const sequelize = require('sequelize')
const Menu = sequelize.define('menu', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  }
})

module.exports = Menu

// TODO: relate menu with product id
