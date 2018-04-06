'use strict'

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const Sequelize = require('sequelize')

app.use(bodyParser.json({limit: '50mb'}))
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}))
app.set('view-engine', 'html')

module.exports = app
