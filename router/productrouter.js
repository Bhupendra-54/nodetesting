
const express = require('express');

const Router = express.Router();

const productsRouter = require('../controller/products')


Router
    .get('/products', productsRouter.getall)
    .post('/auc', productsRouter.postadd)
    .post('/products/:id', productsRouter.getone)
exports.router=Router