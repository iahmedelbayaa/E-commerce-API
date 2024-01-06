import { tables } from '../util/tables';
import ApiError from '../util/api-error';

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

export const getById = async (id: any) => {
  try {
    const product = await Product.findByPk(id);
    return product;
  } catch (error) {
    throw ApiError.from(error);
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
    throw ApiError.from(error);
  }
}
//searchAll
export const searchAll = async (searchAllCriteria: any) => {
  try {
    const products = await Product.findAll({ where: { ...searchAllCriteria } });
    return products;
  } catch (error) {
    throw ApiError.from(error);
  }
};

//searchOne
export const searchOne = async (searchOneCriteria: any) => {
  try {
    const product = await Product.findOne({ where: { ...searchOneCriteria } });
    return product;
  } catch (error) {
    throw ApiError.from(error);
  }
};


//save
export const save = async (product: any) => {
  try {
    const storedProduct = await Product.create(product);
    return storedProduct;
  } catch (error) {
    throw ApiError.from(error);
  }
};

//update
export const update = async (product: any) => {
  try {
    const storedProduct = await Product.update(product, { where: { id: product.id } });
    return storedProduct;
  } catch (error) {
    throw ApiError.from(error);
  }
};

//delete

export const deleteProduct = async (id: any) => {
  try {
    const storedProduct = await Product.destroy({ where: { id: id } });
    return storedProduct;
  } catch (error) {
    throw ApiError.from(error);
  }
};