const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header('Access-Control-Allow-Headers', [
    'Accept',
    'Accept-Encoding',
    'Authorization',
    'Content-Type',
    'X-HTTP-Method-Override',
    'X-Requested-With'
  ].join(', '));
  res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE');
  next();
});

app.use(bodyParser.urlencoded({
  extended: true,
  limit: '50mb',
}));

app.use('/api', require('./controllers'));

app.listen(8000, function() {
  console.log('Example app listening on port 8000!');
});
