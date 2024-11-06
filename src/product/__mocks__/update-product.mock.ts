import { categoryMock } from '../../category/__mocks__/category.mock';
import { UpdateProductDto } from '../dtos/update-procut.dto';

export const updateProductMock: UpdateProductDto = {
  name: 'Product Mock',
  categoryId: categoryMock.id,
  price: 1000,
  image: 'http://image.com',
};
