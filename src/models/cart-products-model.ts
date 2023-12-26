import { Sequelize, DataTypes } from 'sequelize';
import sequelize from '../config/sequelize-config';

export const CartItem = sequelize.define(
  'cart_item',
  {
    quantity: {
      type: DataTypes.INTEGER,
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

CartItem.removeAttribute('id');