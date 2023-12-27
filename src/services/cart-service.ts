import { tables } from '../util/tables';
import * as cartItemService from './cart-item-service';
import * as productService from './product-service';
import * as userService from './user-service';
import * as userProductService from './user-product-service';
import ApiError from '../util/api-error';

const Cart = tables.cart;
const User = tables.user;

export const getById = async (id: any) => {
  try {
    const cart = await Cart.findByPk(id);
    return cart;
  } catch (error) {
    throw ApiError.from(error);
  }
};

export const getUser = async (id: any) => {
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

export const getByUserId = async (userId: any) => {
  try {
    const cart = await Cart.findOne({ where: { userId } });
    return cart;
  } catch (error) {
    throw ApiError.from(error);
  }
};

// export const getCartDetails = async (cart: any) => {
//   try {
//     const cartItems = await cartItemService.searchAll({ cartId: cart.id });
//     let price = 0;

//     const details = await Promise.all(
//       cartItems.map(async (cartItem: any) => {
//         let product = productService.getById(cartItem.productId);
//         let seller = await userService.getById(cartItem.userId);
//         let customer = await getUser(cartItem.cartId) ?? null;
//         let userProduct = await userProductService.searchAll({
//             userId: cartItem.userId,
//             productId: cartItem.productId,
//         });

//         [product, seller, customer, userProduct] = await Promise.all([
//             product,
//             seller,
//             customer,
//             userProduct,
//         ]);

//         price += userProduct.price * cartItem.quantity;

//         return {
//           customerName: `${customer.firstName} ${customer.lastName}`,
//           sellerName: `${seller.firstName} ${seller.lastName}`,
//           productName: product.name,
//           productPrice: userProduct.price,
//           quantity: cartItem.quantity,
//           totalPrice: userProduct.price * cartItem.quantity,
//         };
//       })
//     );

//     const info = { price: price, details: details };
//     return info;
//   } catch (error) {
//     throw new Error(error);
//   }
// };
//save
export const save = async (cart: any) => {
  try {
    const newCart = await Cart.create(cart);
    return newCart;
  } catch (error) {
    throw ApiError.from(error);
  }
};

//clear
export const clear = async (cart: any) => {
  try {
    const newCart = await Cart.destroy(cart);
    return newCart;
  } catch (error) {
    throw ApiError.from(error);
  }
};
