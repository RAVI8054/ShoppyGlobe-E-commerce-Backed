
//  POST / register: Register a new user.
// POST / login: Authenticate user and return a JWT token.

import { login,register } from "../controllers/user.controllers.js";

export default function userRoutes(app){
    app.post("/register", register);
    app.post("/login",  login)
}