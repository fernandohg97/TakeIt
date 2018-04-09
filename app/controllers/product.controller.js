'use strict'

const sequelize = require('sequelize')
const Product = require('../models/product.model')

function getProducts(req, res) {
  Product.findAll()
  .then(products => {
    return res.json(products)
  }).catch(err => {
    res.status(500).send({message: `Error del server: ${err}`})
  })
}

function getProduct(req, res) {
  Product.findById(req.params.id)
  .then(product => {
    if (product) return res.json(product)
    else return res.status(404).send({message: 'Product not found'})
  }).catch(err => {
    res.status(500).send({message: `Error del server: ${err}`})
  })
}

function getProducts(req, res) {
  Product.f
}
