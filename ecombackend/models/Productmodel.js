const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
productname:{type:String, required:true},
price:{type:Number, required:true},
category:{type:String, required:true},
brand:{type:String, required:true},
stock:{type:Number}
});

const Product = mongoose.model('Product', productSchema);
module.exports = Product;

//  let Pro = {
//     productname: "Iphone 16 pro max",
//     price: 150000,
//     category: "Mobile",
//     brand: "apple",
//     stock: 10
// };
 