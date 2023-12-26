import { Sequelize, DataTypes } from 'sequelize';
import sequelize from '../config/sequelize-config';

export const OrderItem = sequelize.define(
  'order_item',
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

OrderItem.removeAttribute('id');
module.exports = OrderItem;
