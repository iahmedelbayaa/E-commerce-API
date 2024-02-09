import { tables } from '../util/tables';
import ApiError from '../util/api-error';

import { IUser } from '../interfaces/user'; // Import the IUser interface

const Role = tables.role;
const User = tables.user;

export const getAll = async () => {
  try {
    const users = await User.findAll();
    return users;
  } catch (error) {
    throw ApiError.from(error);
  }
};

export const getById = async (id: number) => {
  try {
    const user = await User.findByPk(id);
    return user;
  } catch (error) {
    throw ApiError.from(error);
  }
};

export const getByEmail = async (email: string) => {
  try {
    const user = await User.findOne({ where: { email: email } });
    return user;
  } catch (error) {
    throw ApiError.from(error);
  }
};

export const searchAll = async (searchAllCriteria: string[]) => {
  try {
    const users = await User.findAll({ where: { ...searchAllCriteria } });
    return users;
  } catch (error) {
    throw ApiError.from(error);
  }
};

export const getRole = async (id: number) => {
  try {
    const user = await User.findByPk(id, { include: [Role], raw: false });
     if (!user) {
       return null;
     }

     return user;
  } catch (error) {
    throw ApiError.from(error);
  }
};


export const save = async ( user : IUser) => {
  try {
    const storedUser = await User.create(user);
    return storedUser;
  } catch (error) {
    console.error('Error saving user:', error);
    throw ApiError.from(error);
  }
};
// we use the IUser interface to define the user parameter
export const update = async (user: IUser) => {
  try {
    const storedUser = await User.update(user, { where: { id: user.id } });
    return storedUser;
  } catch (error) {
    throw ApiError.from(error);
  }
};

export const remove = async (id: number) => {
  try {
    const storedUser = await User.destroy({ where: { id: id } });
    return storedUser;
  } catch (error) {
    throw ApiError.from(error);
  }
};
