import { NextFunction, Request, Response } from "express";

const serviceErrorToStatusCode = {
    notFound: 404
};

export function notFoundError() {
    return { type: "notFound" };
}

export default function handleErrorsMiddleware(err: any, req: Request, res: Response, next: NextFunction) {
    if (err.type) {
        res.sendStatus(serviceErrorToStatusCode[err.type]);
    }
    res.sendStatus(500);
}