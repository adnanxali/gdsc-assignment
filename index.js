const express= require('express');
const app= express();
require('dotenv').config()
const mongoose= require('mongoose');
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Connected'))
  .catch(err => console.error('Error', err));


const routes=require('./routes/routes')
app.use(express.json());
app.use('/',routes)
app.listen(3000,()=>{
    console.log("Listening to port 3000");
})