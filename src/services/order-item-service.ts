import { tables } from '../util/tables';

const OrderItem = tables.orderItem;

//searchAll
export const searchAll = async (searchAllCriteria: string[]) => {
  try {
    const orderItems = await OrderItem.findAll({ where: { ...searchAllCriteria } });
    return orderItems;
  } catch (error) {
    throw new Error('cant find orderItems ');
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
    throw new Error('cant find orderItem ');
  }
};

//save

export const save = async (orderItem: any) => {
  try {
    const storedOrderItem = await OrderItem.create(orderItem);
    return storedOrderItem;
  } catch (error) {
    throw new Error('cant save orderItem ');
  }
};