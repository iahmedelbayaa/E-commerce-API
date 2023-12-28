import { tables } from '../util/tables';
import * as categoryService from './category-service'

const Product = tables.product;
const Category = tables.category;

export const getAll = async () => {
  try {
    const products = await Product.findAll();
    return products;
  } catch (error) {
    throw new Error('cant get all product ');
  }
};

export const getById = async (id: number) => {
  try {
    const product = await Product.findByPk(id);
    return product;
  } catch (error) {
    throw new Error('cant find product By id');
  }
};

//searchOne 
export const searchOne = async (searchAllCriteria: string[]) => {
    try {
      const products = await Product.findOne({ where: { ...searchAllCriteria } });
      return products;
    } catch (error) {
      throw new Error('cant find product ');
    }
  };

export const getCategory = async (id: number) => {
    try {
        const product = await Product.findByPk(id, { include: [Category], raw: false });
         if (!product) {
         return null;
         }
    
         return product;
    } catch (error) {
        throw new Error('cant get category product ');
    }
}

//save
export const save = async (product: any) => {
  try {
    const category = await categoryService.searchAll({
      name: product.categoryName,
    });
    if (!category) {
      throw new Error('category not found');
    }
    product.categoryId = category;
    const storedProduct = await Product.create(product);
    return storedProduct;
  } catch (error) {
    throw new Error('cant save product ');
  }
};

//update
export const update = async (id: number, product: any) => {
  try {
    const storedProduct = await Product.update(product, { where: { id: id } });
    return storedProduct;
  } catch (error) {
    throw new Error('cant update product ');
  }
};

//delete

export const remove = async (id: number) => {
  try {
    const storedProduct = await Product.destroy({ where: { id: id } });
    return storedProduct;
  } catch (error) {
    throw new Error('cant delete product ');
  }
};