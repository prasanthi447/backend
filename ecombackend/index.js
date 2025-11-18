// mongodb+srv://prasanthi:<db_password>@cluster0.ka7fwkx.mongodb.net/
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const Product = require('./models/Productmodel');


main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://prasanthi:prasanthi@cluster0.ssz1oho.mongodb.net/');

  
}






app.post("/addproduct", async(req, res) => {

    let newProduct =await new Product(req,body).save();
    res.send(newProduct);
})



app.get('/', (req, res) => {
    res.send('Welcome to the E-commerce Backend!');
});




app.listen(8989, () => {    
    console.log("E-commerce backend server is running on port 8989");
});
