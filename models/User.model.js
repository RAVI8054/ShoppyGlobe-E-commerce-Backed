import mongoose from 'mongoose';

// Users Schema with types and validation
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First name is required"],
        trim: true,
        minlength: [2, "First name must be at least 2 characters long"],
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        trim: true,
        lowercase: true,
        validate: {
            validator: function (email) {
                // Simple validation: check for '@' character
                return typeof email === "string" && email.includes("@");
            },
            message: props => `${props.value} is not a valid email! Email must contain '@'.`
        }
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        trim: true,
        minlength: [6, "Password must be at least 6 characters long"],
    }
});

// Create user Schema model
const UserModel = mongoose.model('Users', userSchema);
export default UserModel;
