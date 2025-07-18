import mongoose from 'mongoose';

// Users Schema with types and validation
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "firstname is required"],
        trim: true
    },
    email: {
        type: String,
        required: [true, "email is required"],
        trim: true,
    },
    password: {
        type: String,
        required: [true, "password is required"],
        trim: true,
    }
})

// Create user Schema model
const UserModel = mongoose.model('Users', userSchema)
export default UserModel;

//1. authentication
//2. register/login
