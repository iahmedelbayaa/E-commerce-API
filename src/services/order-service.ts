import { tables } from '../util/tables';
import ApiError from '../util/api-error';

const Order = tables.order;
const User = tables.user;

//getByUserId
export const getByUserId = async (userId: number) => {
  try {
    const order = await Order.findAll({ where: { userId } });
    return order;
  } catch (error) {
    throw ApiError.from(error);
  }
};

//getById
export const getById = async (id: number) => {
  try {
    const order = await Order.findByPk(id);
    return order;
  } catch (error) {
    throw ApiError.from(error);
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
    throw ApiError.from(error);
  }
};

//searchOne
export const searchOne = async (searchOneCriteria: string[]) => {
  try {
    const order = await Order.findOne({ where: { ...searchOneCriteria } });
    return order;
  } catch (error) {
    throw ApiError.from(error);
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
    throw ApiError.from(error);
  }
};

//save
export const save = async (order: any) => {
  try {
    const storedOrder = await Order.create(order);
    return storedOrder;
  } catch (error) {
    throw ApiError.from(error);
  }
};
