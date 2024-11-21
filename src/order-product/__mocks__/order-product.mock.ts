import { orderMock } from '../../order/__mocks__/order.mock';
import { productMock } from '../../product/__mocks__/product.mock';
import { OrderProductEntity } from '../entities/order-product.entity';

export const orderProductMock: OrderProductEntity = {
  amount: 450,
  createdAt: new Date(),
  orderId: orderMock.id,
  price: 450,
  productId: productMock.id,
  updatedAt: new Date(),
  id: 123,
};
