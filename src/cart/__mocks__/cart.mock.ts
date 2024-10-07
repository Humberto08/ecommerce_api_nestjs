import { userEntityMock } from '../../user/__mocks__/user.mock';
import { CartEntity } from '../entities/cart.entity';

export const cartMock: CartEntity = {
  active: true,
  id: 123,
  userId: userEntityMock.id,
  createdAt: new Date(),
  updatedAt: new Date(),
};
