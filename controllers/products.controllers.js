
// ○ GET / products: Fetch a list of products from MongoDB. 
// ○ GET / products /: Fetch details of a single product by its ID.
// ==========================================================
import ProductsModel from "../models/Products.model.js";
// app.post("/product", addProduct);
export async function addProduct(req, res) {
    try {
        console.log(req.headers,"headers");
        const { title, price, stock, description } = req.body;
        let newProduct = await ProductsModel.create({ title, price, stock, description });
        return res.status(201).json({ Product: newProduct });
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}
//-----------------------------------------------------------
// app.get("/products/:id", getProductID);
export async function getProductID(req, res) {
    try {
        let id = req.params?.id;
        const Product = await ProductsModel.findById(id);
        if (!Product) {
            return res.status(404).json({ message: "Product not found" });
        }
        return res.status(200).json(Product);
    } catch (err) {
        return res.status(500).json({ message: `Error: ${err.message}` });
    }
}
// ==========================================================
// app.get("/products", getProduct);
export async function getProduct(req, res) {
    try {
        let product = await ProductsModel.find();
        return res.status(200).json(product);
    } catch (err) {
        return res.status(500).json({ message: "Internal Server Error" });
    }
}
