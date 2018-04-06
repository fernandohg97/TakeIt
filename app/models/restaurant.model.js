'use strict'

const sequelize = require('sequelize')
const Restaurant = sequelize.define('restaurant', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  openTime: {
    type: Sequelize.DATE
  },
  closeTime: {
    type: Sequelize.DATE
  },
  availability: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: true
  }
})

module.exports = Restaurant
// TODO: Relate restaurant with location id
