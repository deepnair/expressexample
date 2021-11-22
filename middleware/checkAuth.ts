import express from 'express';

module.exports = (req:express.Request, res:express.Response, next:express.NextFunction) => {
    const {authenticated} = req.headers;
    authenticated === 'yes' ? next() : res.status(403).json({msg: "You are not authenticated."})
}