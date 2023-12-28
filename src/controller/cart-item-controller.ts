import { Request, Response, NextFunction } from 'express';
import { StatusCode } from '../util/status-code';
import * as cartItemService from '../services/cart-item-service';

export const getAll = (req: Request, res: Response, next: NextFunction) => {
  try {
    const cartItems = cartItemService.getAll();
    res.status(StatusCode.OK).json(cartItems);
  } catch (error) {
    return next(error);
  }
};

export const searchAll = (req: Request, res: Response, next: NextFunction) => {
  try {
    const cartItems = cartItemService.searchAll(req.body);
    res.status(StatusCode.OK).json(cartItems);
  } catch (error) {
    return next(error);
  }
};

export const searchOne = (req: Request, res: Response, next: NextFunction) => {
  try {
    const cartItem = cartItemService.searchOne(req.body);
    res.status(StatusCode.OK).json(cartItem);
  } catch (error) {
    return next(error);
  }
};

export const save = (req: Request, res: Response, next: NextFunction) => {
  try {
    const cartItem = cartItemService.save(req.body);
    res.status(StatusCode.CREATED).json(cartItem);
  } catch (error) {
    return next(error);
  }
};

export const update = (req: Request, res: Response, next: NextFunction) => {
  try {
    const cartItem = cartItemService.update(req.body);
    res.status(StatusCode.CREATED).json(cartItem);
  } catch (error) {
    return next(error);
  }
};

export const deleteCartItem = (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = parseInt(req.params.id);
    const cartItem = cartItemService.deleteCartItem(id);
    res.status(StatusCode.OK).json(cartItem);
  } catch (error) {
    return next(error);
  }
};
