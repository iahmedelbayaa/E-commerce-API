import { tables } from '../util/tables';

const CartItem = tables.cartItem;

export const getAll = async () => {
  try {
    const cartItems = await CartItem.findAll();
    return cartItems;
  } catch (error) {
    throw new Error('cant get all cartItem ');
  }
};

//searchAll
export const searchAll = async (searchAllCriteria: any) => {
  try {
    const cartItems = await CartItem.findAll({ where: { ...searchAllCriteria } });
    return cartItems;
  } catch (error) {
    throw new Error('cant find cartItems ');
  }
};

//searchOne
export const searchOne = async (searchOneCriteria: any) => {
  try {
    const cartItem = await CartItem.findOne({ where: { ...searchOneCriteria } });
    return cartItem;
  } catch (error) {
    throw new Error('cant find cartItem ');
  }
};

//save
export const save = async (cartItem: any) => {
  try {
    const storedCartItem = await CartItem.create(cartItem);
    return storedCartItem;
  } catch (error) {
    throw new Error('cant save cartItem ');
  }
};

//update

export const update = async (cartItem: any) => {
  try {
    const storedCartItem = await CartItem.update(cartItem, {
      where: { id: cartItem.id },
    });
    return storedCartItem;
  } catch (error) {
    throw new Error('cant update cartItem ');
  }
};

//delete

export const deleteCartItem = async (id: any) => {
  try {
    const storedCartItem = await CartItem.destroy({
      where: { id },
    });
    return storedCartItem;
  } catch (error) {
    throw new Error('cant delete cartItem ');
  }
};

