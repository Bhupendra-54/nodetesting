
const express = require('express');

const Router = express.Router();

const productsRouter = require('../controller/products')


Router
    .get('/', productsRouter.getall)
    .post('/auc', productsRouter.postadd)
    .post('/products/:id', productsRouter.getone)
exports.router=Router


// echo "# nodetesting" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/Bhupendra-54/nodetesting.git
// git push -u origin main