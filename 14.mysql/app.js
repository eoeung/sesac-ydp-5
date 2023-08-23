const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('/views', 'view');

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT} is running!`);
});
