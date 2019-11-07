var jwt = require('jsonwebtoken')

const checkToken = (req, res, next) => {
    console.log(req.headers)

    let token = req.headers['authorization']

    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
            if (err) {
                res.status(403).send({
                    message: 'Invalid token'
                })
            } 

            req.decode = decode
            next();
        })
    } else {
        res.status(403).send({
            message: 'Token is not supplied'
        })
    }
}

module.exports = checkToken;