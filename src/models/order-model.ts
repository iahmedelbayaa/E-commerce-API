import { Sequelize, DataTypes } from 'sequelize';
import sequelize from '../config/sequelize-config';

export const Order = sequelize.define(
  'order',
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
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

