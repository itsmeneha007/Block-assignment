
const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  try {
    let token = req.cookies?.token;
    if (!token && req.headers.authorization) {
      const parts = req.headers.authorization.split(" ");
      if (parts.length === 2 && parts[0] === "Bearer") {
        token = parts[1];
      }
    }

    if (!token) {
      return res.status(401).json({ message: "Unauthorized - Token missing" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;

    next();
  } catch (error) {
    console.error("Auth Middleware Error:", error.message);
    return res
      .status(401)
      .json({ message: "Unauthorized - Invalid or expired token" });
  }
};

module.exports = auth;
