import jwt from 'jsonwebtoken'
import { Exception } from "../exceptions/ErrorHandler.js";

export const verifyToken = (req, res, next) => {
  const { access_token } = req.headers;

  if(!access_token){
    return next(new Exception('Provide access token', 400))
  }

  jwt.verify(access_token, process.env.SECRET_KEY, (err, decode) => {
    if(err instanceof jwt.JsonWebTokenError){
      return next(new Exception('Invalid access token', 401))
    }

    req.password = decode.password;
    next();
  })
}