const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('port', (process.env.PORT || 3000));

app.use(express.static(path.join(__dirname, 'dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader('Cache-Control', 'no-cache');
});


app.get('*', (req, res) => {
  fs.readFile(`${__dirname}/dist/index.html`, (error, html) => {
    if (error) throw error;

    res.setHeader('Content-Type', 'text/html');
    res.end(html);
  });
});

app.listen(app.get('port'), () => console.log(`Server is listening: http://localhost:${app.get('port')}`));
