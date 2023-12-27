import { Request, Response } from 'express';
import * as categoryService from '../services/category-service';
import * as productService from '../services/user-service';
import { StatusCode } from '../util/status-code';
import { tables } from '../util/tables';

const Product = tables.product;
const Category = tables.category;


export const getAll = async (req: Request, res: Response) => {
  try {
    const users = await categoryService.getAll();
    res.status(StatusCode.OK).json(users);
  } catch (error) {
    res.status(StatusCode.BAD_REQUEST).json({ message: error.message });
  }
};

export const getById = async (req: Request, res: Response) => {
  try {
    const user = await categoryService.getById(req.params.id);
    res.status(StatusCode.OK).json(user);
  } catch (error) {
    res.status(StatusCode.BAD_REQUEST).json({ message: error.message });
  }
};


export const getCategoryProducts = async (req: Request, res: Response) => {
  try {
    const product = await categoryService.getProducts(req.params.id);
    res.status(StatusCode.OK).json(product);
  } catch (error) {
    res.status(StatusCode.BAD_REQUEST).json({ message: error.message });
  }
};



export const searchAll = async (req: Request, res: Response) => {
  try {
    const users = await categoryService.searchAll(req.body);
    res.status(StatusCode.OK).json(users);
  } catch (error) {
    res.status(StatusCode.BAD_REQUEST).json({ message: error.message });
  }
};


export const save = async (req: Request, res: Response) => {
  try {
    const category = await Category.create(req.body);
    res.status(StatusCode.CREATED).json(category);
  } catch (error) {
    res.status(StatusCode.BAD_REQUEST).json({ message: error.message });
  }
};


export const update = async (req: Request, res: Response) => {
  try {
    const category = await categoryService.update(req.body);
    res.status(StatusCode.CREATED).json(category);
  } catch (error) {
    res.status(StatusCode.BAD_REQUEST).json({ message: error.message });
  }
};


export const remove = async (req: Request, res: Response) => {
  try {
    const product = await categoryService.deleteProduct(req.params.id);
    res.status(StatusCode.CREATED).json({ message: 'removed successfully' });
  } catch (error) {
    res.status(StatusCode.BAD_REQUEST).json({ message: error.message });
  }
};