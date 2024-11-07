import { createOrderPixMock } from '../../order/__mocks__/create-order.mock';
import { PaymentPixEntity } from '../entities/payment-pix.entity';
import { paymentMock } from './payment.mock';

export const paymentPixMock: PaymentPixEntity = {
  ...paymentMock,
  code: 'code_test',
  datePayment: new Date('2022-01-01'),
};
