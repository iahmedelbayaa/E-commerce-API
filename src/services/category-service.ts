import { tables } from '../util/tables';

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

export const getById = async (id: any) => {
  try {
    const product = await Product.findByPk(id);
    return product;
  } catch (error) {
    throw new Error('cant find product By id');
  }
};

//get product
export const getProducts = async (id: any) => {
  try {
    const category = await Category.findByPk(id, { include: [Product], raw: false });
    if (!category) {
      return null;
      }
      return category;

  } catch (error) {
    throw new Error('cant get category product ');
  }
}
//searchAll
export const searchAll = async (searchAllCriteria: any) => {
  try {
    const products = await Product.findAll({ where: { ...searchAllCriteria } });
    return products;
  } catch (error) {
    throw new Error('cant find products ');
  }
};


//save
export const save = async (product: any) => {
  try {
    const storedProduct = await Product.create(product);
    return storedProduct;
  } catch (error) {
    throw new Error('cant save product ');
  }
};