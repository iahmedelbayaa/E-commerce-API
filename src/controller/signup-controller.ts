import * as signupService from '../services/signup-service'
import { Request, Response } from 'express';
import { StatusCode } from '../util/status-code';


export const signup = async (req: Request, res: Response) => {
    const user = req.body;
    try {
        await signupService.signup(user);
        res.status(StatusCode.CREATED).json({ message :'User Sign Up'});
    } catch (error) {
        res.status(StatusCode.BAD_REQUEST).send(error.message);
    }
}