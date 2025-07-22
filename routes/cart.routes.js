// ○ POST / cart: Add a product to the shopping cart.
// ○ PUT / cart /: Update the quantity of a product in the cart.
// ○ DELETE / cart /: Remove a product from the cart.

import {
    addCart,
    deleteCartID,
    updateCartQuantity,
} from "../controllers/cart.controllers.js";

import { verifyToken } from "../middleware/verifyToken.js";
export default function cartRoutes(app) {
    app.post("/cart/:id", verifyToken, addCart);
    app.delete("/cart/:id", verifyToken, deleteCartID);
    app.put("/cart/update/:id", verifyToken, updateCartQuantity)
}
