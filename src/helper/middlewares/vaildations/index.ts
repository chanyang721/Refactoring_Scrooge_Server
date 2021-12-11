import {Request, Response, NextFunction} from "express";
import Joi from "joi";
import {Container} from "typedi";

export const defaultVaildations = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<any> => {
    const schema = Joi.object({
        email: Joi.string().email().trim().max(30).required(),
    });

    const {value, error} = schema.validate(req.body);
    if (error) {
        return res.status(403).json({error});
    }

    req.body = value;
    const {email} = req.body;

    next();
};
