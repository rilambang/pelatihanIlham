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

let surattugasRoute = require('./surattugas/surattugasRoute.js');
app.use('/api',surattugasRoute);

let tipepegawaiRoute = require('./tipepegawai/tipepegawaiRoute.js');
app.use('/api',tipepegawaiRoute);

let pegawaiRoute = require('./pegawai/pegawaiRoute.js');
app.use('/api',pegawaiRoute);

let surattugasrinciRoute = require('./surattugasrinci/surattugasrinciRoute.js');
app.use('/api',surattugasrinciRoute);

//koneksi
mongoose.connect('mongodb://localhost:27017/DBPelatihan');

app.listen(8889);