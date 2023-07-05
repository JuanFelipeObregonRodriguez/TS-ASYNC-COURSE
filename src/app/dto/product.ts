import { Product } from './../models';
import { Category } from './../models';

export interface CreateProductDto extends Omit<Product, 'id' | 'category'>{
  categoryId: Category['id'];
}

export interface UpdateProductDto extends Partial<CreateProductDto> {}