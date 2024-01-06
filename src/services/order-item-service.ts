import { tables } from '../util/tables';
import ApiError from '../util/api-error';

const OrderItem = tables.orderItem;

//searchAll
export const searchAll = async (searchAllCriteria: string[]) => {
  try {
    const orderItems = await OrderItem.findAll({ where: { ...searchAllCriteria } });
    return orderItems;
  } catch (error) {
    throw ApiError.from(error);
  }
};

//searchOne
export const searchOne = async (searchOneCriteria: string[]) => {
  try {
    const orderItem = await OrderItem.findOne({
      where: { ...searchOneCriteria },
    });
    return orderItem;
  } catch (error) {
    throw ApiError.from(error);
  }
};

//save

export const save = async (orderItem: any) => {
  try {
    const storedOrderItem = await OrderItem.create(orderItem);
    return storedOrderItem;
  } catch (error) {
    throw ApiError.from(error);
  }
};