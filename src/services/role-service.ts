import { tables } from '../util/tables';
import ApiError from '../util/api-error';
import { IRole } from '../interfaces/role.interface';

const Role = tables.role;

export const getAll = async () => {
  try {
    const roles = await Role.findAll();
    return roles;
  } catch (error) {
    throw ApiError.from(error);
  }
};

export const searchOne = async (searchAllCriteria: Partial<IRole>) => {
  try {
    const roles = await Role.findOne({ where: { ...searchAllCriteria } });
    return roles;
  } catch (error) {
    throw ApiError.from(error);
  }
};

export const getById = async (id: number) => {
  try {
    const role = await Role.findByPk(id);
    return role;
  } catch (error) {
    throw ApiError.from(error);
  }
};


export const save = async (role: any) => {
  try {
    const storedRole = await Role.create(role);
    return storedRole;
  } catch (error) {
    throw new Error('cant save role ');
  }
};