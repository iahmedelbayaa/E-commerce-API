import * as productService from './product-service';
import { tables } from '../util/tables';
import ApiError from '../util/api-error';
const UserProduct = tables.userProduct;

export const getAll = async () => {
  try {
    const userProducts = await UserProduct.findAll();
    return userProducts;
  } catch (error) {
    throw ApiError.from(error);
  }
};
//getProducts
export const getProducts = async () => {
  try {
    const userProducts = await UserProduct.findAll();
    return userProducts;
  } catch (error) {
    throw ApiError.from(error);
  }
};
//searchAll
export const searchAll = async (searchAllCriteria: string[]) => {
  try {
    const userProducts = await UserProduct.findAll({
      where: { ...searchAllCriteria },
    });
    return userProducts;
  } catch (error) {
    throw ApiError.from(error);
  }
};

//getProductById
export const getById = async (id: number) => {
  try {
    const userProduct = await UserProduct.findAll({ where: { userId: id } });
    if (!userProduct) {
      return null;
    }
    return userProduct;
  } catch (error) {
    throw ApiError.from(error);
  }
};

//save
export const save = async (userProduct: any) => {
  try {
    const storedUserProduct = await UserProduct.create(userProduct);
    return storedUserProduct;
  } catch (error) {
    throw ApiError.from(error);
  }
};

//update

export const update = async (id: number, userProduct: any) => {
  try {
    const storedUserProduct = await UserProduct.update(userProduct, {
      where: { id: userProduct.id },
    });
    return storedUserProduct;
  } catch (error) {
    throw ApiError.from(error);
  }
};

//delete

export const deleteUserProduct = async (id: any) => {
  try {
    const storedUserProduct = await UserProduct.destroy({
      where: { id },
    });
    return storedUserProduct;
  } catch (error) {
    throw ApiError.from(error);
  }
};
