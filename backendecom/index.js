// mongodb+srv://prasanthi:prasanthi@cluster0.gtycehz.mongodb.net/
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const Product = require('./models/Productmodel');


console.log(Product);

app.use(express.json());

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://prasanthi:prasanthi@cluster0.gtycehz.mongodb.net/');
      
}

app.post('/addproduct',async(req,res)=>{
  let newProduct = await new Product(req.body).save()
  res.send(newProduct);

});

app.get('/', (req, res) => {
    res.send("hello world welcome to backend ecommerce");
});


app.listen(8989, () => {
    console.log("server is running at port 8989");
});