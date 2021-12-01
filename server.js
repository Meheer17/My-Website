const express = require('express');
const path = require('path');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(process.cwd() + '/views/5/Projects/index.html');
});

app.get('/projects', (req, res) => {
  res.sendFile(process.cwd() + '/views/projects.html');
});

//              folder 1
app.get('/projects/tribute-page', (req, res) => {
  res.sendFile(process.cwd() + '/views/1/1.html');
});
app.get('/projects/survey-form', (req, res) => {
  res.sendFile(process.cwd() + '/views/1/2.html');
});
app.get('/projects/online-shop', (req, res) => {
  res.sendFile(process.cwd() + '/views/1/3.html');
});
app.get('/projects/document', (req, res) => {
  res.sendFile(process.cwd() + '/views/1/4.html');
});
app.get('/projects/profile-1', (req, res) => {
  res.sendFile(process.cwd() + '/views/1/5.html');
});

//              folder 2
app.get('/projects/random-quote-machine', (req, res) => {
  res.sendFile(process.cwd() + '/views/2/1.html');
});
app.get('/projects/markeddown', (req, res) => {
  res.sendFile(process.cwd() + '/views/2/2.html');
});
app.get('/projects/drum-machine', (req, res) => {
  res.sendFile(process.cwd() + '/views/2/3.html');
});
app.get('/projects/calculator', (req, res) => {
  res.sendFile(process.cwd() + '/views/2/4.html');
});
app.get('/projects/pomodoro-clock', (req, res) => {
  res.sendFile(process.cwd() + '/views/2/5.html');
});

//              folder 3
app.get('/projects/', (req, res) => {
  res.sendFile(process.cwd() + '/views/3/1.html');
});
app.get('/projects/', (req, res) => {
  res.sendFile(process.cwd() + '/views/3/2.html');
});
app.get('/projects/', (req, res) => {
  res.sendFile(process.cwd() + '/views/3/3.html');
});
app.get('/projects/', (req, res) => {
  res.sendFile(process.cwd() + '/views/3/4.html');
});
app.get('/projects/', (req, res) => {
  res.sendFile(process.cwd() + '/views/3/5.html');
});

//              folder 4
app.get('/projects/', (req, res) => {
  res.sendFile(process.cwd() + '/views/4/1.html');
});
app.get('/projects/', (req, res) => {
  res.sendFile(process.cwd() + '/views/4/2.html');
});
app.get('/projects/', (req, res) => {
  res.sendFile(process.cwd() + '/views/4/3.html');
});
app.get('/projects/', (req, res) => {
  res.sendFile(process.cwd() + '/views/4/4.html');
});
app.get('/projects/', (req, res) => {
  res.sendFile(process.cwd() + '/views/4/5.html');
});


//              folder 5
app.get('/projects/temp-convert', (req, res) => {
  res.sendFile(process.cwd() + '/views/5/1.html');
});
app.get('/projects/tribe-web', (req, res) => {
  res.sendFile(process.cwd() + '/views/5/2.html');
});
app.get('/projects/all-react', (req, res) => {
  res.sendFile(process.cwd() + '/views/5/Projects/index.html');
});
app.get('/projects/', (req, res) => {
  res.sendFile(process.cwd() + '/views/5/4.html');
});
app.get('/projects/', (req, res) => {
  res.sendFile(process.cwd() + '/views/5/5.html');
});





app.listen(3000, () => {
  console.log('server started')
});