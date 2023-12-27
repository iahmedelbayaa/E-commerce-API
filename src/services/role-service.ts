import { tables } from '../util/tables';

const Role = tables.role;
const User = tables.user;

export const getAll = async () => {
  try {
    const roles = await Role.findAll();
    return roles;
  } catch (error) {
    throw new Error('cant get Roles ');
  }
};

export const searchOne = async (searchAllCriteria: any) => {
  try {
    const roles = await Role.findOne({ where: { ...searchAllCriteria } });
    return roles;
  } catch (error) {
    throw new Error('cant find role ');
  }
};

export const getById = async (id: any) => {
  try {
    const role = await Role.findByPk(id);
    return role;
  } catch (error) {
    throw new Error('cant find role By id');
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