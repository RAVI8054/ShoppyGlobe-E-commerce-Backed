// ○ POST / cart: Add a product to the shopping cart.
// ○ PUT / cart /: Update the quantity of a product in the cart.
// ○ DELETE / cart /: Remove a product from the cart.

import CartModel from "../models/Cart.model.js";
// ---------------------------------------------------------
// app.post("/cart", addCart);
export async function addCart(req, res) {
    try {
        const { id } = req.params;
        const { userId, productId, quantityChange } = req.body;

        // Check if productId is provided and userId exists
        if (!userId || !productId || quantityChange === undefined) {
            return res.status(400).json({ message: "Missing required fields." });
        }

        // Check if the product is already in the user's cart
        const existingCartItem = await CartModel.findOne({ userId, productId });

        if (existingCartItem) {
            return res.status(400).json({ message: "Product already exists in the cart." });
        }
        //created product in cart
        let Cart = await CartModel.create({ userId, productId, quantityChange });
        return res.status(201).json({ cart: Cart });
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

// -------------------------------------------------------------
// app.put("/cart/update/:id", verifyToken, updateCartQuantity);

export async function updateCartQuantity(req, res) {
    try {
        const { id } = req.params;
        const { quantityChange } = req.body;

        if (typeof quantityChange !== 'number' || quantityChange === 0) {
            return res.status(400).json({ message: "quantityChange must be a non-zero number" });
        }
        // Find the cart item
        const cartItem = await CartModel.findById(id);
        if (!cartItem) {
            return res.status(404).json({ message: "Cart item not found" });
        }

        // Calculate new quantity
        const newquantityChange = cartItem.quantityChange + quantityChange;

        if (newquantityChange < 1) {
            // If quantity is 0 or negative, remove the item
            await CartModel.findByIdAndDelete(id);
            return res.status(200).json({ message: "Cart item removed as quantity reached zero or below" });
        } else {
            // Update quantity
            cartItem.quantityChange = newquantityChange;
            await cartItem.save();
            return res.status(200).json({
                message: `Cart quantity ${newquantityChange > 0 ? 'incremented' : 'decremented'} successfully`,
                data: cartItem
            });
        }

    } catch (err) {
        console.error("Error updating cart quantity:", err);
        res.status(500).json({ message: "Internal server error" });
    }
}

// -------------------------------------------------------------
//app.delete("/cart/:id", deleteCartID);
export async function deleteCartID(req, res) {
    try {
        const id = req.params.id;
        // Try to find and delete the cartItem
        const cartItem = await CartModel.findByIdAndDelete(id);
        // If no cartItem found
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