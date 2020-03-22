const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Thing = require('./model/things');
const stuffRoutes = require('./routes/stuff');
const userRoutes = require('./routes/user');
const path = require('path');

mongoose.connect('mongodb+srv://app:prg2014@cluster-k1ttd.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

const app = express();
const sess = {
  secret: 'agergfdvdfergrergf'
};

app.use(session(sess));

app.use((req, res, next) => {

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});
app.use(bodyParser.json());
app.use('/images', express.static(path.join(__dirname + '/images/')));


app.use('/api/stuff', stuffRoutes);
app.use('/api/auth', userRoutes);
app.use(express.static(path.join(__dirname + 'Frontend/dist/Frontend/').split('/Bakend').join('/')));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname + 'Frontend/dist/Frontend/index.html').split('/Bakend').join('/'));
});

/*
app.use('/', express.static(path.join(__dirname + 'Frontend/dist/Frontend').split('/Bakend').join('/')));
app.use('/home', express.static(path.join(__dirname + 'Frontend/dist/Frontend').split('/Bakend').join('/')));
app.use('/login', express.static(path.join(__dirname + 'Frontend/dist/Frontend').split('/Bakend').join('/')));
*/




module.exports = app;