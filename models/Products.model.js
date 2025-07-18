import mongoose from "mongoose";

// Product Schema with types and validation
const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "title is required"],
        trim: true,
    },
    price: {
        type: Number,
        required: [true, "price is required"],
        trim: true,
    },
    stock: {
        type: Number,
        required: [true, "stock is required"],
        trim: true,
    }, 
    description: {
        type: String,
        required: [true, "description is required"],
        trim: true,
    },
});

// Create Product Schema model
const ProductsModel = mongoose.model("Products", ProductSchema);
export default ProductsModel;