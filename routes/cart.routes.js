// ○ POST / cart: Add a product to the shopping cart.
// ○ PUT / cart /: Update the quantity of a product in the cart.
// ○ DELETE / cart /: Remove a product from the cart.

import { addCart, deleteCartID, updatecartID } from  "../controllers/cart.controllers.js";
import { verifyToken } from "../middleware/verifyToken.js";

export default function cartRoutes(app){
    app.post("/cart",verifyToken,addCart);
    app.put("/cart/:id", verifyToken, updatecartID);
    app.delete("/cart/:id", verifyToken, deleteCartID);
}

