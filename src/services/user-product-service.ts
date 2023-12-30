import * as productService from './product-service';
import { tables } from '../util/tables';

const UserProduct = tables.userProduct;

export const getAll = async () => {
  try {
    const userProducts = await UserProduct.findAll();
    return userProducts;
  } catch (error) {
    throw new Error('cant get all userProduct ');
  }
};
//getProducts
export const getProducts = async () => {
  try {
    const userProducts = await UserProduct.findAll();
    return userProducts;
  } catch (error) {
    throw new Error('cant get all userProduct ');
  }
};
//searchAll
export const searchAll = async (searchAllCriteria: string[]) => {
  try {
    const userProducts = await UserProduct.findAll({ where: { ...searchAllCriteria } });
    return userProducts;
  } catch (error) {
    throw new Error('cant find userProducts ');
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
    throw new Error('cant get product ');
  }
};

//save
export const save = async (userProduct: any) => {
  try {
    const storedUserProduct = await UserProduct.create(userProduct);
    return storedUserProduct;
  } catch (error) {
    throw new Error('cant save userProduct ');
  }
};

//update

export const update = async (id: number , userProduct: any) => {
  try {
    const storedUserProduct = await UserProduct.update(userProduct, {
      where: { id: userProduct.id },
    });
    return storedUserProduct;
  } catch (error) {
    throw new Error('cant update userProduct ');
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
    throw new Error('cant delete userProduct ');
  }
};

