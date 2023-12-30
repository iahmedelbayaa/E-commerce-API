import Joi from 'joi';

export const cartItemSchema = Joi.object({
  userId: Joi.number().required(),
  productId: Joi.number().required(),
  quantity: Joi.number().min(1).required(),
});
