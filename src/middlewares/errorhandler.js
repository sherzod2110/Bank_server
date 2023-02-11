import { Exception } from "../exceptions/ErrorHandler.js"

export default (err, req, res, next) => {
  if(err instanceof Exception){
    return res.status(err.status).json({
      message: err.message,
      status: err.status
    })
  }

  res.status(503).json({
    message: err.message,
    status: 503
  })
}