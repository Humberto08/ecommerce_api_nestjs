import { PaymentType } from '../../payment-status/enums/payment-type.enum';
import { PaymentEntity } from '../entities/payment.entity';

export const paymentMock: PaymentEntity = {
  id: 2323,
  statusId: PaymentType.Done,
  price: 1900,
  discount: 350,
  finalPrice: 2200,
  type: '',
  createdAt: new Date(),
  updatedAt: new Date(),
};
