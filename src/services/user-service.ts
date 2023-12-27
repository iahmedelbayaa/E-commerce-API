import { tables } from '../util/tables';


const Role = tables.role;
const User = tables.user;

export const getAll = async () => {
  try {
    const users = await User.findAll();
    return users;
  } catch (error) {
    throw new Error('cant get all user ');
  }
};

export const getById = async (id: any) => {
  try {
    const user = await User.findByPk(id);
    return user;
  } catch (error) {
    throw new Error('cant find user By id');
  }
};

export const getByEmail = async (email: any) => {
  try {
    const user = await User.findOne({ where: { email: email } });
    return user;
  } catch (error) {
    throw new Error('cant find user by email ');
  }
};

export const searchAll = async (searchAllCriteria: any) => {
  try {
    const users = await User.findAll({ where: { ...searchAllCriteria } });
    return users;
  } catch (error) {
    throw new Error('cant find users ');
  }
};

export const getRole = async (id: any) => {
  try {
    const user = await User.findByPk(id, { include: [Role], raw: false });
     if (!user) {
       return null;
     }

     return user;
  } catch (error) {
    throw new Error('cant get role user ');
  }
};

export const save = async ( user : any) => {
  try {
    const storedUser = await User.create(user);
    return storedUser;
  } catch (error) {
    throw new Error('cant save user ');
  }
};

export const update = async (user: any) => {
  try {
    const storedUser = await User.update(user, { where: { id: user.id } });
    return storedUser;
  } catch (error) {
    throw new Error('cant update user ');
  }
};

export const remove = async (id: any) => {
  try {
    const storedUser = await User.destroy({ where: { id: id } });
    return storedUser;
  } catch (error) {
    throw new Error('cant remove user ');
  }
};
