import Joi from 'joi';

const signupSchema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().email().lowercase().required(),
    password: Joi.string().min(8).required(),
    roleName: Joi.string().required(),
});


export default signupSchema;
