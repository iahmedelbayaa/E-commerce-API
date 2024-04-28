import { Request, Response } from 'express';
import * as userService from '../services/user-service';
import { StatusCode } from '../util/status-code';

export const getAll = async (req: Request, res: Response) => {
  try {
    const users = await userService.getAll();
    res.status(StatusCode.OK).json(users);
  } catch (error: any) {
    res.status(StatusCode.BAD_REQUEST).json({ message: error.message });
  }
};

export const getById = async (req: Request, res: Response) => {
  try {
    const id = +(req.params.id);
    const user = await userService.getById(id);
    res.status(StatusCode.OK).json(user);
  } catch (error: any) {
    res.status(StatusCode.BAD_REQUEST).json({ message: error.message });
  }
};

export const getByEmail = async (req: Request, res: Response) => {
  try {
    const user = await userService.getByEmail(req.params.email);
    res.status(StatusCode.OK).json(user);
  } catch (error: any) {
    res.status(StatusCode.BAD_REQUEST).json({ message: error.message });
  }
};

export const searchAll = async (req: Request, res: Response) => {
  try {
    const users = await userService.searchAll(req.body);
    res.status(StatusCode.OK).json(users);
  } catch (error: any) {
    res.status(StatusCode.BAD_REQUEST).json({ message: error.message });
  }
};

export const getRole = async (req: Request, res: Response) => {
  try {
    const id = +(req.params.id);
    const user = await userService.getRole(id);
    res.status(StatusCode.OK).json(user);
  } catch (error: any) {
    res.status(StatusCode.BAD_REQUEST).json({ message: error.message });
  }
};

export const save = async (req: Request, res: Response) => {
  try {
    await userService.save(req.body);
    res.status(StatusCode.CREATED).json({ message: 'saved successfully' });
  } catch (error: any) {
    res.status(StatusCode.BAD_REQUEST).json({ message: error.message });
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const id = +(req.params.id);

    await userService.update({id, ...req.body});
    res.status(StatusCode.OK).json({ message: 'Updating successfully' });
  } catch (error: any) {
    res.status(StatusCode.BAD_REQUEST).json({ message: error.message });
  }
};

export const remove = async (req: Request, res: Response) => {
  try {
    const id = +(req.params.id);
    await userService.remove(id);
    res.status(StatusCode.OK).json({ message: 'Deleted successfully' });
  } catch (error: any) {
    res.status(StatusCode.BAD_REQUEST).json({ message: error.message });
  }
};
