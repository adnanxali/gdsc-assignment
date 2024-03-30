const mongoose = require('mongoose');
const { number } = require('zod');
const Schema =mongoose.Schema;

const variantSchema= new Schema({
    size:String,
    color:String,
    material:String,
    description:String,
    price:Number,
})

const productSchema = new Schema({
    name:String,
    variant:[variantSchema]
})
module.exports=mongoose.model('Product',productSchema);