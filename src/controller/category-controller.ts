import { Request, Response } from 'express';
import * as categoryService from '../services/category-service';
import { StatusCode } from '../util/status-code';
import { tables } from '../util/tables';

const Category = tables.category;


export const getAll = async (req: Request, res: Response) => {
  try {
    const users = await categoryService.getAll();
    res.status(StatusCode.OK).json(users);
  } catch (error: any) {
    res.status(StatusCode.BAD_REQUEST).json({ message: error.message });
  }
};
//searchOne
export const searchOne = async (req: Request, res: Response) => {
  try {
    const users = await categoryService.searchOne(req.body);
    res.status(StatusCode.OK).json(users);
  } catch (error: any) {
    res.status(StatusCode.BAD_REQUEST).json({ message: error.message });
  }
};
export const getById = async (req: Request, res: Response) => {
  try {
    const categoryId = +(req.params.id)
    const user = await categoryService.getById(categoryId);
    res.status(StatusCode.OK).json(user);
  } catch (error: any) {
    res.status(StatusCode.BAD_REQUEST).json({ message: error.message });
  }
};


export const getCategoryProducts = async (req: Request, res: Response) => {
  try {
    const categoryId = +(req.params.id)
    const product = await categoryService.getProducts(categoryId);
    res.status(StatusCode.OK).json(product);
  } catch (error: any) {
    res.status(StatusCode.BAD_REQUEST).json({ message: error.message });
  }
};



export const searchAll = async (req: Request, res: Response) => {
  try {
    const users = await categoryService.searchAll(req.body);
    res.status(StatusCode.OK).json(users);
  } catch (error: any) {
    res.status(StatusCode.BAD_REQUEST).json({ message: error.message });
  }
};


export const save = async (req: Request, res: Response) => {
  try {
    const category = await Category.create(req.body);
    res.status(StatusCode.CREATED).json(category);
  } catch (error: any) {
    res.status(StatusCode.BAD_REQUEST).json({ message: error.message });
  }
};


export const update = async (req: Request, res: Response) => {
  try {
    const category = await categoryService.update(req.body);
    res.status(StatusCode.CREATED).json(category);
  } catch (error: any) {
    res.status(StatusCode.BAD_REQUEST).json({ message: error.message });
  }
};


export const remove = async (req: Request, res: Response) => {
  try {
    const categoryId = +(req.params.id)
    await categoryService.deleteProduct(categoryId);
    res.status(StatusCode.CREATED).json({ message: 'removed successfully' });
  } catch (error: any) {
    res.status(StatusCode.BAD_REQUEST).json({ message: error.message });
  }
};