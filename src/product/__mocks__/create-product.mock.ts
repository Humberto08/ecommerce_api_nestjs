import { categoryMock } from '../../category/__mocks__/category.mock';
import { CreateProductDto } from '../dtos/create-product.dto';

export const createProductMock: CreateProductDto = {
  name: 'Product Mock',
  categoryId: categoryMock.id,
  price: 1000,
  image: 'http://image.com',
};
