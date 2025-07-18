import jwt from 'jsonwebtoken';
//import UserModel from '../models/User.model';

//middleware verfing token
export function verifyToken(req, res, next) {
    if (req.headers &&
        req.headers.authorization &&
        req.headers.authorization.split(" ")[0] === "JWT"
    ) {
        jwt.verify(
            req.headers.authorization.split(" ")[1],
            "secretKey",
            //its non blocking so use callback
            (err, verifiedToken) => {
                if (err) {
                    return res.status(403).json({ message: "invalid Token" })
                }
              //  console.log(verifiedToken, "verifiedToken");
                console.log(req,"req-1");
                req.user=verifiedToken;
               // console.log(req,"req-2");   
               next() 
            }
            //UserModel.findById()
        )
    }
}