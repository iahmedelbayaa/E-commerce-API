import { tables } from '../util/tables';
import ApiError from '../util/api-error';

const Cart = tables.cart;
const User = tables.user;

export const getById = async (id: number) => {
  try {
    const cart = await Cart.findByPk(id);
    return cart;
  } catch (error) {
    throw ApiError.from(error);
  }
};

export const getUser = async (id: number) => {
  try {
    const cart = await Cart.findByPk(id, { include: [User], raw: false });
    if (!cart) {
      return null;
    }
    return cart;
  } catch (error) {
    throw ApiError.from(error);
  }
};

export const getByUserId = async (userId: number) => {
  try {
    const cart = await Cart.findOne({ where: { userId } });
    return cart;
  } catch (error) {
    throw ApiError.from(error);
  }
};

export const getCartInfo = async (id: number) => {
  try {
    const cart = await Cart.findByPk(id, {
      include: [
        {
          model: tables.cartItem,
          include: [
            {
              model: tables.product,
              include: [tables.userProduct],
            },
          ],
        },
      ],
    });
    return cart;
  } catch (error) {
    throw ApiError.from(error);
  }
};


export const save = async (cart: any) => {
  try {
    const newCart = await Cart.create(cart);
    return newCart;
  } catch (error) {
    throw ApiError.from(error);
  }
};


export const clear = async (cart: any) => {
  try {
    const newCart = await Cart.destroy(cart);
    return newCart;
  } catch (error) {
    throw ApiError.from(error);
  }
};
