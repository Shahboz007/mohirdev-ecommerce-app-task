const {errorHandler, handleError} = require('../utils/errorHandler');

const errorMiddleware = (err, req, res, next) => {
    if(process.env.NODE_ENV === 'development') {
        return res.status(err.statusCode || 500).json({
            success: false,
            status: err.statusCode || 500,
            message: err.message,
            stack: err.stack
        })
    }else {
        return handleError(err, res);
    }
}