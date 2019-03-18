const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

const items = require('./routes/api/Items');

app.use(bodyParser.json());




app.use('/api/items', items);



mongoose
    .connect('mongodb+srv://nicola:samsung330@cluster0-8t26p.mongodb.net/prova?retryWrites=true')
    .then(() => console.log('mongodb connected sucker'))
    .catch(err => console.log(err));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));
