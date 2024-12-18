require('dotenv').config({ path: '../.env' }); // Load environment variables form .env file
const jwt = require('jsonwebtoken')

const JWT_SECRET = process.env.JWT_SECRET; // Verify the token using the JWT_SECRET from environment variables

const fetchUser = (req, res, next) => {
    const token = req.header('auth-token') // Get token
    if (!token) {
        res.status(401).send({error: "Please use valid token"})
    }
    try {
        const data = jwt.verify(token, JWT_SECRET);
        req.user = data.user
        next();
    } catch (error) {
        res.status(401).send({error: "Please use valid token"})
    }
}

module.exports = fetchUser