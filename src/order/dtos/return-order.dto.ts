import { ReturnUserDto } from '../../user/dtos/returnUser.dto';
import { OrderEntity } from '../entities/order.entity';

export class ReturnOrderDto {
  id: number;
  date: String;
  user?: ReturnUserDto;

  constructor(order: OrderEntity) {
    this.id = order.id;
    this.date = order.date.toISOString();
    this.user = order.user ? new ReturnUserDto(order.user) : undefined;
  }
}
