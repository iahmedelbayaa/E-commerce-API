import { tables } from '../util/tables';
import ApiError from '../util/api-error';

const Role = tables.role;

export const getAll = async () => {
  try {
    const roles = await Role.findAll();
    return roles;
  } catch (error) {
    throw ApiError.from(error);
  }
};

export const searchOne = async (searchAllCriteria:any ) => {
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