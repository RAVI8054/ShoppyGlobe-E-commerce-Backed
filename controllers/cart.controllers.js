// ○ POST / cart: Add a product to the shopping cart.
// ○ PUT / cart /: Update the quantity of a product in the cart.
// ○ DELETE / cart /: Remove a product from the cart.

import CartModel from "../models/Cart.model.js";
// ---------------------------------------------------------
// app.post("/cart", addCart);
export async function addCart(req, res) {
    try {
        const { userId, productId, quantity } = req.body;
        let Cart = await CartModel.create({ userId, productId, quantity });
        return res.status(201).json({ cart: Cart });
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

// -------------------------------------------------------------
//app.put("/cart/:id", incrementCartQuantity)
export async function incrementCartQuantity(req, res) {
    try {
        const id = req.params.id;
        const { quantity } = req.body;

        if (typeof quantity !== 'number' || quantity < 1) {
            return res.status(400).json({ message: "Quantity must be a positive number" });
        }
        const updatedCart = await CartModel.findByIdAndUpdate(
            id,
            { quantity:`${quantity }`},
            { new: true, runValidators: true }
        );

        if (!updatedCart) {
            return res.status(404).json({ message: "Cart item not found" });
        }

        res.status(200).json({ message: "Quantity incremented successfully", data: updatedCart });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Failed to increment cart item" });
    }
}
export async function decrementCartQuantity(req, res) {
    try {
        const id = req.params.id;
        const { quantity } = req.body;

        if (typeof quantity !== 'number' || quantity < 1) {
            return res.status(400).json({ message: "Quantity must be a positive number" });
        }

        const updatedCart = await CartModel.findByIdAndUpdate(
            id,
        
            { new: true, runValidators: true }
        );

        if (!updatedCart) {
            return res.status(404).json({ message: "Cart item not found" });
        }

        // Optional: Prevent negative quantities
        if (updatedCart.quantity < 1) {
            await CartModel.findByIdAndDelete(id); // Remove item if quantity goes to 0 or less
            return res.status(200).json({ message: "Cart item removed as quantity reached zero" });
        }

        res.status(200).json({ message: "Quantity decremented successfully", data: updatedCart });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Failed to decrement cart item" });
    }
}



// -------------------------------------------------------------
//app.delete("/cart/:id", deleteCartID);
export async function deleteCartID(req, res) {
    try {
        const id = req.params.id;
        // Try to find and delete the cartItem
        const cartItem = await CartModel.findByIdAndDelete(id);
        // If no cartItem found, respond with 404
        if (cartItem === null || !cartItem) {
            return res.status(404).json({ message: "cart not found" });
        }
        // cartItem was found and deleted
        return res.status(200).json({ message: " cartItem Deleted successfully" });
    } catch (err) {
        console.error("Error deleting cartItem:", err);
        return res.status(500).json({ message: "cartItem not deleted" });
    }
}