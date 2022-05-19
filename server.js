const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const cookieParser = require('cookie-parser');
const teams = require('./api/teams')

app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname)));
app.use('/api', teams);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

const server = app.listen(process.env.PORT || 5500, () => {
  const { port } = server.address();
  console.log(`Server running on PORT ${port}`);
});
