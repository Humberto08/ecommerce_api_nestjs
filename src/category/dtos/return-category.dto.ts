import { ReturnProductDto } from '../../product/dtos/return-product.dto';
import { CategoryEntity } from '../entities/category.entity';

export class ReturnCategoryDto {
  id: number;
  name: string;
  amountProducts?: number;
  products?: ReturnProductDto[];

  constructor(categoryEntity: CategoryEntity, amountProducts?: number) {
    this.id = categoryEntity.id;
    this.name = categoryEntity.name;
    this.amountProducts = amountProducts;
    this.products = categoryEntity.products
      ? categoryEntity.products.map((product) => new ReturnProductDto(product))
      : undefined;
  }
}
