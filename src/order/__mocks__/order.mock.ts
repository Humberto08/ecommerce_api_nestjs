import { addressMock } from '../../address/__mocks__/address.mock';
import { OrderEntity } from '../entities/order.entity';
import { paymentMock } from '../../payment/__mocks__/payment.mock';
import { userEntityMock } from '../../user/__mocks__/user.mock';

export const orderMock: OrderEntity = {
  addressId: addressMock.id,
  createdAt: new Date(),
  date: new Date(),
  id: 123,
  paymentId: paymentMock.id,
  updatedAt: new Date(),
  userId: userEntityMock.id,
};
