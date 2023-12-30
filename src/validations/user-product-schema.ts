import Joi from 'joi';

export const userProductSchema = Joi.object({
  productId: Joi.number().required(),
  price: Joi.number().required(),
});
