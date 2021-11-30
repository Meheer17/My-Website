const express = require('express');
const path = require('path');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(process.cwd() + '/views/index.html');
});

app.get('/projects', (req, res) => {
  res.sendFile(process.cwd() + '/views/projects.html');
});

app.listen(3000, () => {
  console.log('server started');
});
