import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/sequelize-config';

// Define the UserAttributes interface
interface UserAttributes {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string; 
}
interface UserModel extends Model<UserAttributes>, UserAttributes {}

// Define the 'user' Sequelize model
export const User = sequelize.define<UserModel>(
  'user',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    createdAt: false,
    updatedAt: false,
    freezeTableName: true,
    underscored: true,
  }
);
