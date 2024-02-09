import { tables } from '../util/tables';
import * as categoryService from './category-service';
import ApiError from '../util/api-error';
import { IProduct } from '../interfaces/product.interface';

const Product = tables.product;
const Category = tables.category;

export const getAll = async () => {
  try {
    const products = await Product.findAll();
    return products;
  } catch (error) {
    throw ApiError.from(error);
  }
};

export const getById = async (id: number) => {
  try {
    const product = await Product.findByPk(id);
    return product;
  } catch (error) {
    throw ApiError.from(error);
  }
};

//searchOne
export const searchOne = async (searchAllCriteria: string[]) => {
  try {
    const products = await Product.findOne({ where: { ...searchAllCriteria } });
    return products;
  } catch (error) {
    throw ApiError.from(error);
  }
};

export const getCategory = async (id: number) => {
  try {
    const product = await Product.findByPk(id, {
      include: [Category],
      raw: false,
    });
    if (!product) {
      return null;
    }

    return product;
  } catch (error) {
    throw ApiError.from(error);
  }
};
//searchAll
export const searchAll = async (searchAllCriteria: string[]) => {
  try {
    const products = await Product.findAll({ where: { ...searchAllCriteria } });
    return products;
  } catch (error) {
    throw ApiError.from(error);
  }
};

//save
export const save = async (product: IProduct) => {
  try {
    const category = await categoryService.searchAll({
      name: product.name,
    });
    if (!category) {
      throw new Error('category not found');
    }
    product.id = category[0].id; // Assign the id property of the first category in the array
    const storedProduct = await Product.create(product);
    return storedProduct;
  } catch (error) {
    throw ApiError.from(error);
  }
};

//update
export const update = async (id: number, product: IProduct) => {
  try {
    const storedProduct = await Product.update(product, { where: { id: id } });
    return storedProduct;
  } catch (error) {
    throw ApiError.from(error);
  }
};

//delete

export const remove = async (id: number) => {
  try {
    const storedProduct = await Product.destroy({ where: { id: id } });
    return storedProduct;
  } catch (error) {
    throw ApiError.from(error);
  }
};
