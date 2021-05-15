import { Controller, Post, HttpCode } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('api/products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  @HttpCode(200)
  async handleRequest() {
    this.productsService.handleProductRequest;
  }
}
