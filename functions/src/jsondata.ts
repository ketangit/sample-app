import * as fse from 'fs-extra';

const express = require('express');
const app = express();

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/', function(req, res) {
  res.send('Hello Sample api!');
});

app.get('/data/:dtype', function(request, response) {
  const dtype = request.params.dtype;
  if (dtype) {
    fse.readJson('./db.json', (err, data) => {
      if (err) {
        console.log(err);
      } else {
        response.json(data[dtype]);
      }
    });
  } else {
    console.log('error: Invalid request query');
  }
});

export const jsondata = app;
