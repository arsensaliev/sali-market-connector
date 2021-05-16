import { Injectable } from '@nestjs/common';
import { ProductsRepository } from './repositories/products.repository';

@Injectable()
export class ProductsService {
  constructor(private readonly productsRepository: ProductsRepository) {}

  handleProductRequest(payload) {
    return this.productsRepository.sendCreateProductRequest(payload);
  }
}
