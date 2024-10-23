import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrderEntity } from './entities/order.entity';
import { CreateOrderDto } from './dtos/create-order.dto';
import { PaymentService } from '../payment/payment.service';


@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(OrderEntity)
    private readonly orderRepository: Repository<OrderEntity>,
    private readonly paymentService: PaymentService,
  ) {}

  async createOrder(createOrderDto: CreateOrderDto, cartId: number) {
    await this.paymentService.createPayment(createOrderDto);
    return null;
  }
}
