import jwt from "jsonwebtoken";

/* VERIFY TOKEN FUNCTION */
export const verifyToken = async (req, res, next) => {
  try {
    let token = req.header("Authorization");

    // if token does not exist
    if (!token) {
      return res.status(403).send("Access Denied");
    }

    // if exists, take everything to the right of "Bearer "
    if (token.startsWith("Bearer ")) {
      token = token.slice(7, token.length).trimLeft();
    }

    // check verification with JWT
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
