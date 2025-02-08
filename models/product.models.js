// product.models.js
const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    name: {
        type: String, // Corrected casing to 'type'
        required: [true, "enter you product name"],
    },

    quantity: {
        type: Number, // Corrected casing to 'type'
        required: [true, "enter you product quantity"],
        default: 0,
    },

    price: {
        type: Number, // Corrected casing to 'type'
        required: true,
        default: 0,
    },
    Image: {
        type: String, // Corrected casing to 'type'
        required: false,
    },
}, { timestamps: true }); // Added timestamps: true at the schema level

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;