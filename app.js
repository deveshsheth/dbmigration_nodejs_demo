// imports
const express = require('express')
const app = express();
const dotenv = require('dotenv')
const bodyParser = require('body-parser');
const dataRouter = require('./routes/user.routes');

dotenv.config();

app.use(bodyParser.json());
app.use('/api', dataRouter);

const port = process.env.PORT || 9696;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});