const express = require('express');
const app = express();
const hostname = '127.0.0.1';
const PORT = 8000;

// axios 동적 폼 실습

app.listen(PORT, () => {
  console.log(`http://${hostname}:${PORT} is running`);
});
