import { Exception } from "../exceptions/ErrorHandler.js";

export default schema => {
  return (req, _, next) => {
    const { error, value } = schema.validate(req.body)

    if(error){
      return next(new Exception(error.message, 422))
    }
 
    req.filtered = value;
    next()
  }
}