const jwt = require('jsonwebtoken')

const SECRET = "lucas"

const verifyJWT = (req, res, next) => {

    const token = req.headers['x-access-token'];

    jwt.verify(token, SECRET, (err, decoded) => {
        if (err){
            res.status(401).send(err);
        }

        req.userId = decoded.userId;
        next();
    })
}

module.exports = verifyJWT;