'use strict'

const sequelize = require('sequelize')
const Ingredient = sequelize.define('ingredient', {
  id: {
    type: Sequelize.INTEGER
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  type: { // TODO Define ingredient types or categories.
    type: Sequelize.STRING,
    allowNull: false
  },
  availabiliy: {
    type: Sequelize.BOOLEAN,
    defaultValue: true
  },
})

module.exports = Ingredient
