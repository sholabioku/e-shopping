const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', (req, res, next) => {
  // console.log('this always run');
  next();
});

app.use('/add-product', (req, res, next) => {
  // console.log('In another middleware');
  res.send('<form action="/product" method="post"><input type="text" name="title"><button type="submit">Add product</button></form>');
});

app.use('/product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

app.use('/', (req, res, next) => {
  // console.log('In another middleware');
  res.send('<h1>Hello from express!</h1>');
});

app.listen(3000, console.log('app connected'));
