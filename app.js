const express = require('express');
const app = express();

//Test
app.get('/', (req, res) => {
  res.json({ message: 'Hello from GlucoCare API!' });
});

module.exports = app;
