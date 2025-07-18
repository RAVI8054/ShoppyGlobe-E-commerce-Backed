import express from "express";
const app = express();
import prodctsRoutes from "./routes/products.routes.js";
import cartRoutes from "./routes/cart.routes.js";
 import userRoutes from "./routes/user.routes.js";
import mongoose from 'mongoose';
// seed/dummy data
// import seedDB  from "./seed.js";


mongoose.connect('mongodb+srv://ravimrvr:k64GelD7ZpBsBktK@cluster0.d857wuf.mongodb.net/'
)// returns a promise
    .then(() => {
        console.log("DB CONNECTED");
    })
    .catch((err) => {
        console.log("DB NOT CONNECTED", err.message);
    });


//  for parsing JSON request bodies
app.use(express.json());

// Routes
prodctsRoutes(app);
cartRoutes(app);
userRoutes(app)

//seedDB(app)

const PORT=8000;
app.listen(PORT,()=>{
    console.log(`server connected ${PORT}`);
    
})

