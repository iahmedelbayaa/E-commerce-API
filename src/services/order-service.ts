import { tables } from '../util/tables';
import * as orderItemService from './order-item-service';
import * as productService from './product-service';
import * as userService from './user-service';
import * as userProductService from './user-product-service';

const Order = tables.order;
const User = tables.user;

//getByUserId
export const getByUserId = async (userId: number) => {
  try {
    const order = await Order.findAll({ where: { userId } });
    return order;
  } catch (error) {
    throw new Error('cant find order By userId');
  }
};

//getById
export const getById = async (id: number) => {
  try {
    const order = await Order.findByPk(id);
    return order;
  } catch (error) {
    throw new Error('cant find order By id');
  }
};

//getUser
export const getUser = async (id: number) => {
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
export const searchOne = async (searchOneCriteria: string[]) => {
  try {
    const order = await Order.findOne({ where: { ...searchOneCriteria } });
    return order;
  } catch (error) {
    throw new Error('cant find order ');
  }
};

//getOrderInfo
export const getOrderInfo = async (id: number) => {
  try {
    const order = await Order.findByPk(id, {
      include: [
        {
          model: tables.orderItem,
          include: [
            {
              model: tables.product,
              include: [tables.userProduct],
            },
          ],
        },
      ],
    });
    return order;
  } catch (error) {
    throw new Error('cant get order info ');
  }
};

//save
export const save = async (order: any) => {
  try {
    const storedOrder = await Order.create(order);
    return storedOrder;
  } catch (error) {
    throw new Error('cant save order ');
  }
};
