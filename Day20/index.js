let express = require('express');
let mongoose = require('mongoose');
let bodyParser = require ('body-parser');

let app = express();
//let route = ex.router();
app.use(bodyParser.json());

//Route
let gedungRoute = require ('./gedung/gedungRoute.js');
app.use('/api', gedungRoute);

let gedungRinciRoute = require ('./gedungRinci/gedungRinciRoute.js');
app.use('/api', gedungRinciRoute);

let aplikasiDetailRoute = require('./aplikasiDetail/aplikasiDetailRoute.js');
app.use('/api', aplikasiDetailRoute);

//koneksi
mongoose.connect('mongodb://localhost:27017/DBPelatihan');

app.listen(8889);