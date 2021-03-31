const express = require("express");
const productRouter = express.Router();
const productSchema = require("../schemas/productSchema");
const mongoose = require("mongoose");

const Product = new mongoose.model('Product', productSchema);

productRouter.get('/', async(req, res) => {
    console.log(req.query.a);
    res.render('products/index');
})

productRouter.post('/', async(req, res) => {    
    console.log(req.body);
    const product = new Product(req.body);
    await product.save((err) => {
        if(err){
            console.log("error creating product");
        }
        else{
            res.render('products/index');
        }
    })
})

productRouter.get('/new', async(req, res) => {    
    res.render('products/new', {});
})

productRouter.get('/:id', async(req, res) => {    
    res.render('products/show', {id: req.params.id});
})


module.exports  = productRouter;