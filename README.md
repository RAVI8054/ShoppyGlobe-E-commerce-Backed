##🛍️ ShoppyGlobe E-commerce API

This project is the backend system for ShoppyGlobe, an e-commerce application built using Node.js, Express.js, and MongoDB. It provides API endpoints for user authentication, product browsing, and cart management, with full CRUD support and secure JWT-based access control.
---
### 🔗 Project Links
- 🗂️ GitHub Repo: [ShoppyGlobe-E-commerce-Backed](https://github.com/RAVI8054/ShoppyGlobe-E-commerce-Backed.git)
---
## 📚 Project Overview
 This backend system supports:
  - Product browsing and detail viewing
  - Shopping cart operations
  - Secure user registration and login
  - JWT-based authorization
  - Full CRUD integration with MongoDB
---
## 📦 Tech Stack
 - Node.js
 - Express.js
 - MongoDB & Mongoose
 - JWT (JSON Web Token) for authentication
 - ThunderClient (for testing APIs)
---
## 📁 Project Structure
```
ShoppyGlobe-Ecommerce-Backed/
├── models/
│   ├── Product.model.js
│   ├── Cart.model.js
│   └── User.model.js
├── routes/
│   ├── product.routes.js
│   ├── cart.routes.js
│   └── user.routes.js
├── controllers/
│   ├── product.controller.js
│   ├── cart.controller.js
│   └── user.controller.js
├── middleware/
│   └── verifyToken.js
|   └── userDetialsValidation.js
├── seed.js
├── index.js
├── package.json
└── README.md
```

##🚀Getting Started
### 📁 Prerequisites
- Node.js (v14+ recommended)
- npm
### 🛠️Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/RAVI8054/ShoppyGlobe-E-commerce-Backed.git
   cd ShoppyGlobe-E-commerce-Backed
2. Install dependencies:
   ```bash
   npm install 
3. Start the server:
   ```bash
   npm start
---
