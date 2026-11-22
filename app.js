const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

//Test
app.get('/', (req, res) => {
  res.json({ message: 'Hello from GlucoCare API!' });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
