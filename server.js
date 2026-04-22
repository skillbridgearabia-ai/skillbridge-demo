const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(__dirname ));

// Password check endpoint
app.post('/api/auth', (req, res) => {
  const { password } = req.body;
  const DEMO_PASSWORD = process.env.DEMO_PASSWORD || 'vision2030';
  if (password === DEMO_PASSWORD) {
    res.json({ ok: true });
  } else {
    res.status(401).json({ ok: false, error: 'Incorrect password' });
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`SkillBridge Arabia Demo on port ${port}`);
  console.log(`Password: ${process.env.DEMO_PASSWORD || 'vision2030'}`);
});
