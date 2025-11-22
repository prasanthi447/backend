const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
   productname:{type:String,required:true},
   price:{type:Number,required:true},
   category:{type:String,required:true},
   brand:{type:String,required:true},
   stock:{type:Number}   
})
const Product = mongoose.model("product",productSchema);
module.exports=Product;

// let pro ={
//     productname:"samsung",
//     price:25000,
//     category:"mobile",
//     brand:"samsung",
//     stock:11
// }