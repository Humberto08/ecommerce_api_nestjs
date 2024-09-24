import { ProductEntity } from "../entities/product.entity";

export class ReturnProduct {
    id: number;
    name: string;
    price: number;
    image: string;
    categoryId: number;
    createdAt: Date;
    updatedAt: Date;

    constructor(product: ProductEntity) {
        this.id = product.id;
        this.name = product.name;
        this.price = product.price;
        this.image = product.image;
        this.categoryId = product.categoryId;
        this.createdAt = product.createdAt;
        this.updatedAt = product.updatedAt;
    }
}