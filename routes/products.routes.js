 
// ○ GET / products: Fetch a list of products from MongoDB.
// ○ GET / products /: Fetch details of a single product by its ID.

 // importing controllers for routes
import 
      { addProduct,
        getProduct,
        getProductID } from "../controllers/products.controllers.js"


export default function prodctsRoutes(app){
    app.post("/product",addProduct);
    app.get("/products", getProduct);
    app.get("/products/:id", getProductID);
}


