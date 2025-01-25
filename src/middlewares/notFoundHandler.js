import createHttpError from 'http-errors';

export const notFoundHandler = (req, res, next) => {
    return next(new createHttpError(404, 'Route not found'));
};