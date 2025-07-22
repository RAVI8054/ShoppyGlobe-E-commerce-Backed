import jwt from 'jsonwebtoken';

//middleware verfing token
export function verifyToken(req, res, next) {
    console.log(req.headers)
    if (req.headers &&
        req.headers.authorization &&
        req.headers.authorization.split(" ")[0] === "JWT"
    ) {

        jwt.verify(
            req.headers.authorization.split(" ")[1],
            "secretKey",
            (err, verifiedToken) => {
                if (err) {
                    return res.status(403).json({ message: "invalid Token" })
                }
              console.log(verifiedToken, "verifiedToken");
                console.log(req,"req-1");
                req.user=verifiedToken;
               console.log(req,"req-2");   
               next() 
            }
        )
    }
}