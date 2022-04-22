const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

//Middleware
app.use(cors());
app.use(express.json())

//Connect to MongoDB
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true});
const connection = mongoose.connection;
connection.once('open', ()=>{
    console.log("MongoDB Database Connection Established Successfully");
})

const excersiceRouter = require('./routes/excersices');
const userRouter = require('./routes/users');

app.use('/excersices', excersiceRouter);
app.use('/users',userRouter);

app.listen(port, ()=>{
    console.log('Server is running on port : '+port);
});