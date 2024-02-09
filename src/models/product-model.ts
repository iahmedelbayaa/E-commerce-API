import { DataTypes ,Model} from 'sequelize';
import sequelize from '../config/sequelize-config';
interface ProductAttributes {
  id: number;
  name: string;
}

interface ProductModel extends Model<ProductAttributes>, ProductAttributes { }

export const Product = sequelize.define<ProductModel>(
  'product',
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


