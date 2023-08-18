const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.render('dynamic');
});

/////////// Ajax //////////////
// get ajax
app.get('/ajax', (req, res) => {
  console.log(req.query);
  res.send(req.query);
});

// post ajax
app.post('/ajax', (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

/////////// Axios //////////////
// get axios
app.get('/axios', (req, res) => {
  console.log(req.query);
  res.send(req.query);
});

// post axios
app.post('/axios', (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

/////////// Fetch //////////////
// get fetch
app.get('/fetch', (req, res) => {
  console.log(req.query);
  res.send(req.query);
});

// post fetch
app.post('/fetch', (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.listen(PORT, function () {
  console.log(`Port ${PORT} is opening!`);
});
