import { IsNumber, IsString } from 'class-validator';

export class UpdateProductDto {
  @IsString()
  name: string;

  @IsNumber()
  categoryId: number;

  @IsNumber()
  price: number;

  @IsString()
  image: string;

  @IsNumber()
  weight?: number;

  @IsNumber()
  length?: number;

  @IsNumber()
  height?: number;

  @IsNumber()
  width?: number;
  
  @IsNumber()
  diameter?: number;
}
