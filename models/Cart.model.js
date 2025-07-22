import mongoose from 'mongoose';

// CartSchema Schema with types and validation
const cartSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
        required: true
    },
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Products',
        required: true
    },
    quantityChange: {
        type: Number,
        required: true,
        min: [1, 'Quantity must be at least 1']
    }
});
// Create cart Schema model
const CartModel = mongoose.model('CartItem', cartSchema);
export default CartModel;
