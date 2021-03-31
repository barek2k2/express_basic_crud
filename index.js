const express = require("express");
const app = express();
const port = 3000;
const productRoutesHandler = require("./routesHandler/productRoutesHandler");
const expressLayouts = require('express-ejs-layouts');
const bodyParser= require('body-parser')
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/hello_node', {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log('connected!'))
  .catch((e) => console.log(e))


app.get("/", (req, res) => {
    res.send("Home page!")
})

app.set('view engine', 'ejs');
app.use(expressLayouts);
app.use(bodyParser.urlencoded({ extended: true }))
//app.set('layout', 'layouts/application');

app.use('/products', productRoutesHandler);


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })