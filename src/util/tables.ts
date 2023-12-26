import { User } from '../models/user-model';
import { Role } from '../models/role-model';
import {Category} from '../models/category-model';
import {Product} from '../models/product-model';
import {UserProduct} from '../models/user-products-model';
import {Order} from '../models/order-model';
import {OrderItem} from '../models/order-products-model';
import {Cart} from '../models/cart-model';
import {CartItem} from '../models/cart-products-model';

export const tables = Object.freeze({
  user: User,
  role: Role,
  category: Category,
  product: Product,
  userProduct: UserProduct,
  order: Order,
  orderItem: OrderItem,
  cart: Cart,
  cartItem: CartItem,
});


