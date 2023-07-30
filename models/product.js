const mongoose = require('mongoose');

const { Schema } = mongoose;
const productSchema = new Schema({
   
    aid: String,
    sts:String

  });
  exports.Product = mongoose.model('list', productSchema);