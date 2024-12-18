import { categoryMock } from '../../category/__mocks__/category.mock';
import { ProductEntity } from '../entities/product.entity';

export const productMock: ProductEntity = {
  id: 4567,
  name: 'Product Mock',
  categoryId: categoryMock.id,
  price: 1000,
  image: 'http://image.com',
  createdAt: new Date(),
  updatedAt: new Date(),
  diameter: 2,
  height: 43,
  length: 5,
  weight: 4,
  width: 2,
};
