import { Request, Response, NextFunction } from 'express';
import { StatusCode } from '../util/status-code';
import * as orderService from '../services/order-service';

export const getByUserId = (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = parseInt(req.params.userId);
    const order = orderService.getByUserId(userId);
    res.status(StatusCode.OK).json(order);
  } catch (error) {
    return next(error);
  }
};


export const getById = (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = parseInt(req.params.id);
    const order = orderService.getById(id);
    res.status(StatusCode.OK).json(order);
  } catch (error) {
    return next(error);
  }
};

export const getUser = (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = parseInt(req.params.id);
    const order = orderService.getUser(id);
    res.status(StatusCode.OK).json(order);
  } catch (error) {
    return next(error);
  }
};

export const searchOne = (req: Request, res: Response, next: NextFunction) => {
  try {
    const searchOneCriteria = req.body;
    const order = orderService.searchOne(searchOneCriteria);
    res.status(StatusCode.OK).json(order);
  } catch (error) {
    return next(error);
  }
};


export const getOrderInfo = (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = parseInt(req.params.id);
    const order = orderService.getOrderInfo(id);
    res.status(StatusCode.OK).json(order);
  } catch (error) {
    return next(error);
  }
};

export const save = (req: Request, res: Response, next: NextFunction) => {
  try {
    const order = req.body;
    const savedOrder = orderService.save(order);
    res.status(StatusCode.OK).json(savedOrder);
  } catch (error) {
    return next(error);
  }
};