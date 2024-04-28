import { Request, Response, NextFunction } from 'express';
import { StatusCode } from '../util/status-code';
import * as userProductService from '../services/user-product-service';

export const getAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const products = await userProductService.getAll();
    res.status(StatusCode.OK).json(products);
  } catch (error) {
    return next(error);
  }
};

export const getById = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = parseInt(req.params.id);
    const product = await userProductService.getById(id);
    res.status(StatusCode.OK).json(product);
  } catch (error) {
    return next(error);
  }
};
//getProducts
export const getProducts = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const products = await userProductService.getProducts();
    res.status(StatusCode.OK).json(products);
  } catch (error) {
    return next(error);
  }
};

export const create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const product = await userProductService.save(req.body);
    res.status(StatusCode.CREATED).json(product);
  } catch (error) {
    return next(error);
  }
};

export const update = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = parseInt(req.params.id);
    const product = await userProductService.update(id, req.body);
    res.status(StatusCode.OK).json(product);
  } catch (error) {
    return next(error);
  }
};

export const remove = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = parseInt(req.params.id);
    const product = await userProductService.deleteUserProduct(id);
    res.status(StatusCode.OK).json(product);
  } catch (error) {
    return next(error);
  }
};