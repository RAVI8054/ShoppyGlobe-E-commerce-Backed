// middleware/authValidation.js
function isValidEmail(email) {
    if (typeof email !== 'string') return false;
    return email.includes('@');  // check if '@' exists
}

//validation middleware for registration
export function validateRegister(req, res, next) {
    const { firstName, email, password } = req.body;

    if (!firstName || typeof firstName !== 'string' || firstName.trim().length < 2) {
        return res.status(400).json({ message: "Full name must be at least 2 characters long" });
    }

    if (!isValidEmail(email)) {
        return res.status(400).json({ message: "Email must contain '@' symbol" });
    }

    if (!password || typeof password !== 'string' || password.length < 6) {
        return res.status(400).json({ message: "Password must be at least 6 characters long" });
    }

    next();
}

//validation for login deatils
export function validateLogin(req, res, next) {
    const { email, password } = req.body;

    if (!isValidEmail(email)) {
        return res.status(400).json({ message: "Email must contain '@' symbol" });
    }

    if (!password || typeof password !== 'string') {
        return res.status(400).json({ message: "Password is required" });
    }
    next();
}
