import { cartMock } from '../../cart/__mocks__/cart.mock';
import { CartProductEntity } from '../entities/cart-product.entity';
import { productMock } from '../../product/__mocks__/product.mock';

export const cartProductMock: CartProductEntity = {
  id: 123,
  amount: 450,
  cartId: cartMock.id,
  productId: productMock.id,
  createdAt: new Date(),
  updatedAt: new Date(),
};
