import { Request, Response, NextFunction } from 'express';
import { StatusCode } from '../util/status-code';
import * as cartService from '../services/cart-service';

export const getById = (req: Request, res: Response, next: NextFunction) => {
    try {
    const id = parseInt(req.params.id);
    const cart = cartService.getById(id);
    res.status(StatusCode.OK).json(cart);
  } catch (error) {
    return next(error);
  }
};

export const getUser = (req: Request, res: Response, next: NextFunction) => {
    try {
    const id = parseInt(req.params.id);
    const cart = cartService.getUser(id);
    res.status(StatusCode.OK).json(cart);
  } catch (error) {
    return next(error);
  }
};

export const getByUserId = (req: Request, res: Response, next: NextFunction) => {
    try {
    const id = parseInt(req.params.id);
    const cart = cartService.getByUserId(id);
    res.status(StatusCode.OK).json(cart);
  } catch (error) {
    return next(error);
  }
};

export const getCartInfo = (req: Request, res: Response, next: NextFunction) => {
    try {
    const id = parseInt(req.params.id);
    const cart = cartService.getCartInfo(id);
    res.status(StatusCode.OK).json(cart);
  } catch (error) {
    return next(error);
  }
};

export const save = (req: Request, res: Response, next: NextFunction) => {
    try {
    const cart = cartService.save(req.body);
    res.status(StatusCode.CREATED).json(cart);
  } catch (error) {
    return next(error);
  }
};

export const clear = (req: Request, res: Response, next: NextFunction) => {
    try {
    const cart = cartService.clear(req.body);
    res.status(StatusCode.CREATED).json(cart);
  } catch (error) {
    return next(error);
  }
};