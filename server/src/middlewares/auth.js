const jwt = require('jsonwebtoken')
const {router} = require("express/lib/application");


module.exports = function (req, res, next) {
    // Get token from header
    const token = req.header('authorization');

    // Check if not token
    if (!token) {
        return res.status(401).json({msg: 'No token, authorization denied'})
    }

    // Verify token
    try {
        const decoded = jwt.verify(token, 'MY_SECRET_KEY');
        req.user = decoded.user;
        console.log(decoded)
        return next();
    } catch (error) {
        console.error(error)
        res.status(401).json({msg: "Token is not valid"})
    }
}

