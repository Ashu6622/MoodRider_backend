
const errorHandler = (error, req, res, next)=>{
    return res.status(req.statusCode).json({message:error.message})
}

module.exports = errorHandler;