import Joi from 'joi';

export const productUpdateSchema = Joi.object({
  id: Joi.number().required(),
  name: Joi.string().required(),
  categoryName: Joi.string().required(),
});
