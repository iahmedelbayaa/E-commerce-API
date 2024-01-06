import { tables } from '../util/tables';
import ApiError from '../util/api-error';

const CartItem = tables.cartItem;

export const getAll = async () => {
  try {
    const cartItems = await CartItem.findAll();
    return cartItems;
  } catch (error) {
    throw ApiError.from(error);
  }
};


export const searchAll = async (searchAllCriteria: string[]) => {
  try {
    const cartItems = await CartItem.findAll({ where: { ...searchAllCriteria } });
    return cartItems;
  } catch (error) {
    throw ApiError.from(error);
  }
};


export const searchOne = async (searchOneCriteria: string[]) => {
  try {
    const cartItem = await CartItem.findOne({ where: { ...searchOneCriteria } });
    return cartItem;
  } catch (error) {
    throw ApiError.from(error);
  }
};

export const save = async (cartItem: any) => {
  try {
    const storedCartItem = await CartItem.create(cartItem);
    return storedCartItem;
  } catch (error) {
    throw ApiError.from(error);
  }
};


export const update = async (cartItem: any) => {
  try {
    const storedCartItem = await CartItem.update(cartItem, {
      where: { id: cartItem.id },
    });
    return storedCartItem;
  } catch (error) {
    throw ApiError.from(error);
  }
};



export const deleteCartItem = async (id: number) => {
  try {
    const storedCartItem = await CartItem.destroy({
      where: { id },
    });
    return storedCartItem;
  } catch (error) {
    throw ApiError.from(error);
  }
};

