import { Request, Response, NextFunction } from 'express';
import { StatusCode } from '../util/status-code';
import * as orderItemService from '../services/order-item-service';

export const searchAll = (req: Request, res: Response, next: NextFunction) => {
  try {
    const orderItems = orderItemService.searchAll(req.body);
    res.status(StatusCode.OK).json(orderItems);
  } catch (error) {
    return next(error);
  }
};


export const searchOne = (req: Request, res: Response, next: NextFunction) => {
  try {
    const orderItem = orderItemService.searchOne(req.body);
    res.status(StatusCode.OK).json(orderItem);
  } catch (error) {
    return next(error);
  }
};


export const save = (req: Request, res: Response, next: NextFunction) => {
  try {
    const orderItem = orderItemService.save(req.body);
    res.status(StatusCode.CREATED).json(orderItem);
  } catch (error) {
    return next(error);
  }
};
