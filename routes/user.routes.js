
//  POST / register: Register a new user.
// POST / login: Authenticate user and return a JWT token.

import { login,register } from "../controllers/user.controllers.js";
import { validateLogin, validateRegister } from "../middleware/userDetailsValidation.js";

export default function userRoutes(app){
    app.post("/register", validateRegister,register);
    app.post("/login",validateLogin,login)
}