import { Request, Response, NextFunction } from 'express';
import ApiError from '../util/api-error';
import * as productService from '../services/product-service';

export const getAll = (req: Request, res: Response, next: NextFunction) => {
  try {
    const products = productService.getAll();
    res.status(200).json(products);
  } catch (error) {
    return next(error);
  }
};

export const getById = (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = parseInt(req.params.id);
    const product = productService.getById(id);
    res.status(200).json(product);
  } catch (error) {
    return next(error);
  }
};

export const create = (req: Request, res: Response, next: NextFunction) => {
  try {
    const product = productService.save(req.body);
    res.status(201).json(product);
  } catch (error) {
    return next(error);
  }
};

export const update = (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = parseInt(req.params.id);
    const product = productService.update(id, req.body);
    res.status(200).json(product);
  } catch (error) {
    return next(error);
  }
};

export const remove = (req: Request, res: Response, next: NextFunction) => {
    try {
      const id = parseInt(req.params.id);
    const product = productService.remove(id);
    res.status(200).json(product);
  } catch (error) {
    return next(error);
  }
};

export const getCategoryInfo = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
    try {
      const id = parseInt(req.params.id);
    const product = productService.getCategory(id);
    res.status(200).json(product);
  } catch (error) {
    return next(error);
  }
};
