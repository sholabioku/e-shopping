const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const errorController = require('./controllers/error');
// const User = require('./models/user');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoute = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

//app.use((req, res, next) => {
// User.findById('5e5e060cc70af53d308c98cf')
//   .then(user => {
//     req.user = new User(user.username, user.email, user.cart, user._id);
//     next();
//   })
//   .catch(err => console.log(err));
//});

app.use('/admin', adminRoute);
app.use(shopRoutes);

app.use(errorController.get404);

mongoose
  .connect('mongodb://localhost:27017/shop', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    app.listen(3000, () => console.log('Database connected...'));
  })
  .catch(err => console.log(err));
