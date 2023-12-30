import Joi from 'joi';

export const cartItemDeletionSchema = Joi.object({
  userId: Joi.number().required(),
  productId: Joi.number().required(),
});
