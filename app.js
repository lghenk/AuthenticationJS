require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = process.env.PORT || 3000;

const bodyParser = require('body-parser');

const AuthRoutes = require('./routes/auth');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

app.use('/v1/auth', AuthRoutes);
app.use('/v1/profile', AuthRoutes);
app.use('/v1/storage', AuthRoutes);
app.use('/v1/users', AuthRoutes);

mongoose.connect(process.env.MONGO_URL || "", {useNewUrlParser: true});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})