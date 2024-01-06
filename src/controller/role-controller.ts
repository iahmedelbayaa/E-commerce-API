import { Request, Response } from 'express';
import * as roleService from '../services/user-service';
import { StatusCode } from '../util/status-code';
import { tables } from '../util/tables';

const Role = tables.role;
const User = tables.user;

export const getAll = async (req: Request, res: Response) => {
  try {
    const users = await roleService.getAll();
    res.status(StatusCode.OK).json(users);
  } catch (error) {
    res.status(StatusCode.BAD_REQUEST).json({ message: error.message });
  }
};

export const getById = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id);

    const user = await roleService.getById(id);
    res.status(StatusCode.OK).json(user);
  } catch (error) {
    res.status(StatusCode.BAD_REQUEST).json({ message: error.message });
  }
};

export const save = async (req: Request, res: Response) => {
  try {
    const user = await Role.create(req.body);
    res.status(StatusCode.CREATED).json(user);
  } catch (error) {
    res.status(StatusCode.BAD_REQUEST).json({ message: error.message });
  }
};
