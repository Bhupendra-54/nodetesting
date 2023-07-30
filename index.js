const express= require('express');
const Routes=require('./router/productrouter')
const server=express();
const mongoose = require('mongoose');
const cors=require('cors')
const multer=require('cors')
const bodyParser = require('body-parser');
const morgan=require('morgan')
var upload = multer();

main().catch(err => console.log(err));

async function main() {
  // await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce');
  console.log("database connected")
 await mongoose.connect('mongodb+srv://bsc:mymongo12345@cluster0.hjzbzv0.mongodb.net/aucs');
}


// const auth =((req,res,next)=>{
//     if(req.query.password=='123'){
//         next()
//     }else{
//         res.sendStatus(404);
//     }
// })
// server.use(auth)
server.use(cors())
server.use(bodyParser.json())

// server.use(express.json());
server.use(bodyParser.urlencoded({ extended: true }));
 // server.use(express('default'));
server.use('/',Routes.router)
server.listen(8080);
console.log("hello world");

