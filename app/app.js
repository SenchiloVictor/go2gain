const path = require('path');
const fs = require('fs');
require('dotenv').config({
    path: path.join(__dirname, '../.env')
});
const express = require('express');
const app = express();
const routes = require('./routes');
const formidable = require('express-formidable');
const cors = require('cors');

process.env.PRIVATE_KEY = fs.readFileSync(
    `${__dirname}/${process.env.PRIVATE_KEY}`,
    'utf8'
);
process.env.PUBLIC_KEY = fs.readFileSync(
    `${__dirname}/${process.env.PUBLIC_KEY}`,
    'utf8'
);

app.use(cors());
app.use(formidable({
    maxFileSize: 262144,
    maxFieldsSize: 262144
}));
app.use(express.json());
app.use(routes);

(async (app) => {
    app.listen(process.env.SERVER_PORT, () => {
        console.log(`Server working on ${process.env.SERVER_PORT} port`);
    });
})(app);
