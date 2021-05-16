import { Controller, Post, HttpCode, Body } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('api/products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  @HttpCode(200)
  async handleRequest(@Body() productRequestBody) {
    this.productsService.handleProductRequest(productRequestBody);
    return;
  }
}
