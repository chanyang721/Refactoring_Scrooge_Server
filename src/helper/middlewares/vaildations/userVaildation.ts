import { Request, Response, NextFunction } from "express"
import Joi from "joi"


export const userVaildation =  async (req: Request, res: Response, next: NextFunction): Promise<any> => {

    const schema = Joi.object({
        name: Joi.string().required(),
        email: Joi.string().email().trim().max(30).required()
    })

    const { value, error } = schema.validate(req.body)
    if (error) {
        return res.status(403).json({ error })
    }

    req.body = value;

    next();
}