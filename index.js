const express= require('express');
const app= express();
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://adnanxali:helloworld@cluster0.hjc7uzy.mongodb.net/productsdb');

const routes=require('./routes/routes')
app.use(express.json());
app.use('/',routes)
app.listen(3000,()=>{
    console.log("Listening to port 3000");
})