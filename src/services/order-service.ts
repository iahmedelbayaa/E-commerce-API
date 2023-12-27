import { tables } from '../util/tables';
import * as orderItemService from './order-item-service';
import * as productService from './product-service';
import * as userService from './user-service';
import * as userProductService from './user-product-service';

const Order = tables.order;
const User = tables.user;

//getByUserId
export const getByUserId = async (userId: any) => {
  try {
    const order = await Order.findAll({ where: { userId } });
    return order;
  } catch (error) {
    throw new Error('cant find order By userId');
  }
};

//getById
export const getById = async (id: any) => {
  try {
    const order = await Order.findByPk(id);
    return order;
  } catch (error) {
    throw new Error('cant find order By id');
  }
};

//getUser
export const getUser = async (id: any) => {
  try {
    const order = await Order.findByPk(id, { include: [User], raw: false });
    if (!order) {
      return null;
    }
    return order;
  } catch (error) {
    throw new Error('cant get user order ');
  }
};

//searchOne
export const searchOne = async (searchOneCriteria: any) => {
  try {
    const order = await Order.findOne({ where: { ...searchOneCriteria } });
    return order;
  } catch (error) {
    throw new Error('cant find order ');
  }
};

//getOrderInfo
// export const getOrderInfo = async (order: any) => {
//   try {
//     const orderItems = await orderItemService.searchAll({ orderId: order.id });
//     let price = 0;

//     const details = await Promise.all(
//       orderItems.map(async (orderItem: any) => {
//         let product = productService.getById(orderItem.productId);
//         let seller = await userService.getById(orderItem.userId);
//         let customer = await getUser(orderItem.orderId) ?? null;
//         let userProduct = await userProductService.searchAll({
//           userId: orderItem.userId,
//           productId: orderItem.productId,
//         });

//         [product, seller, customer, userProduct] = await Promise.all([
//           product,
//           seller,
//           customer,
//           userProduct,
//         ]);

//         price += orderItem.quantity * product.price;

//         return {
//           product,
//           seller,
//           customer,
//           quantity: orderItem.quantity,
//           userProduct,
//         };
//       })
//     );

//     return { details, price };
//   } catch (error) {
//     throw new Error('cant get order info');
//   }
// };

//save
export const save = async (order: any) => {
  try {
    const storedOrder = await Order.create(order);
    return storedOrder;
  } catch (error) {
    throw new Error('cant save order ');
  }
};
