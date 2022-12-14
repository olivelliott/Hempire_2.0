const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  size: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    trim: true,
  },
  image: {
    type: String,
  },
  quantity: {
    type: Number,
    required: true,
    min: 0,
    default: 0,
  },
  price: {
    type: Number,
    min: 0,
  },
  category: [{
    type: Schema.Types.ObjectId,
    ref: 'Category'
  }],
  user: [{
    type: Schema.Types.ObjectId,
    ref: 'User',
  }]
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;