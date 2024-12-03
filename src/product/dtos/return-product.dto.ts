import { ProductEntity } from '../entities/product.entity';
import { ReturnCategoryDto } from '../../category/dtos/return-category.dto';

export class ReturnProduct {
  id: number;
  name: string;
  price: number;
  image: string;
  categoryId: number;
  category?: ReturnCategoryDto;

  constructor(productEntity: ProductEntity) {
    this.id = productEntity.id;
    this.name = productEntity.name;
    this.price = productEntity.price;
    this.image = productEntity.image;
    this.categoryId = productEntity.categoryId;
    this.category = productEntity.category
      ? new ReturnCategoryDto(productEntity.category)
      : undefined;
  }
}
