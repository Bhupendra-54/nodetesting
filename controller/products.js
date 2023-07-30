const fs=require('fs')
// const products=JSON.parse(fs.readFileSync('products.json','utf-8'))
const model=require('../models/product')
const Product=model.Product;
exports.getall=(req,res)=>{
    // const product=new Product(req.body)
    // product.save()
    res.send("bhupendra singh")
    // console,log("aaya h")
    // res.json(products)
}
exports.postadd=(req,res)=>{
    const product=new Product(req.body);
    product.save();
    console.log(req.body)
    console.log("bhupi")
    res.send(req.body);
   
}
exports.getone=async (req,res)=>{
    const id=req.params.id
    // console.log(id);
    const poduct=new Product()
    console.log(req.body)

    const doc= await Product.findOneAndUpdate({_id:id},req.body,{new:true})
    // Product.save()
    res.sendStatus(201)

    // const product=products.find(p => p.Id==id)
    // res.json(product)
    
}