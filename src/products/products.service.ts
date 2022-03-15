import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {

  private products: Product[] = []

  create(createProductDto: CreateProductDto) {
    return this.products.push(createProductDto);
  }

  findAll() {
    return this.products
  }

  findOne(name: string) {
    return this.products.find((product) => {
      product.name == name
    })
  }
}
