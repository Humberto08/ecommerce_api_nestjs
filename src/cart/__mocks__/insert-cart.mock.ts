import { productMock } from '../../product/__mocks__/product.mock';
import { InsertCartDto } from '../dtos/insert-cart.dto';

export const insertCartMock: InsertCartDto = {
  amount: 450,
  productId: productMock.id,
};
