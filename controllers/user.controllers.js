//  POST / register: Register a new user.
// POST / login: Authenticate user and return a JWT token.

import UserModel from "../models/User.model.js";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';

export function register(req, res) {
    try {
        const { firstName, email, password } = req.body;
        UserModel.findOne({ email })
            .then((data) => {
                if (data) {
                    return res.status(409).json({ message: "User already exists" });
                } else {
                    const hashedPassword = bcrypt.hashSync(password, 3);
                    return UserModel.create({
                        firstName,
                        email,
                        password: hashedPassword
                    })//second for create new  user
                        .then(() => {
                            return res.status(201).json({ message: "User created successfully" });
                        });
                }
            })
            .catch((err) => {
                return res.status(500).json({ message: err.message });
            });
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}
export function login(req, res) {
    try {
        const { email, password } = req.body;
        UserModel.findOne({ email }).then((data) => {
            if (!data) {
                return res.status(403).json({ message: "User doesnot exists" });
            }
            const validPassword = bcrypt.compareSync(password, data.password);
            if (!validPassword) {
                return res.status(403).json({ message: "Wrong credentials" });
            }
  //if user are valid  give toke for enjoy services
            const token = jwt.sign({ id:data._id }, 'secretKey',{expiresIn:'60m'});
           console.log(token)

            return res.status(200).json({
                user: {
                    email: data.email,
                    firstName: data.firstName
                },
                 accessToken:token,
            });
        });
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}
