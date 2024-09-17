import { userEntityMock } from '../../user/__mocks__/user.mock';
import { AddressEntity } from '../entities/address.entity';

export const addressMock: AddressEntity = {
  id: userEntityMock.id,
  userId: 43424,
  complement: 'Complement Test Mock',
  numberAddress: 123,
  cep: '11111111',
  cityId: 43456,
  createdAt: new Date(),
  updatedAt: new Date(),
};
