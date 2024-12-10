import { Controller, Get, Param } from '@nestjs/common';
import { CorreiosService } from './correios.service';
import { ReturnCepDto } from './dto/return-cep.dto';
import { ResponsePriceCorreiosDto } from './dto/response-price-correios';


@Controller('correios')
export class CorreiosController {
  constructor(private readonly correiosService: CorreiosService) {}

  @Get('/price')
  async priceDelivery(): Promise<ResponsePriceCorreiosDto> {
    return this.correiosService.priceDelivery();
  }
  @Get(':cep')
  async findAll(@Param('cep') cep: string): Promise<ReturnCepDto> {
    return this.correiosService.findAddressByCep(cep);
  }

  
}
