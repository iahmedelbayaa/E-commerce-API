// Import the Sequelize model and the sequelize instance
import { Sequelize, DataTypes, Model } from 'sequelize';
import sequelize from '../config/sequelize-config';

// Define the RoleAttributes interface
interface RoleAttributes {
  id: number;
  name: string;
}

// Define the RoleModel interface
interface RoleModel extends Model<RoleAttributes>, RoleAttributes {}

// Define the 'role' Sequelize model
export const Role = sequelize.define<RoleModel>(
  'role',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      unique: true,
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


