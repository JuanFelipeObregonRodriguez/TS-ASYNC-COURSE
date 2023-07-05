import { CreateProductDto, UpdateProductDto } from "../app/dto/product";

export interface Product {
    id:          number;
    title:       string;
    price:       number;
    description: string;
    category:    Category;
    images:      string[];
    categoryId:  number;
}

export interface Category {
    id:    number;
    name:  string;
    image: string;
}
export interface ProductService {
    getAll(): Product[] | Promise<Product[]>;
    update(id: Product['id'], changes: UpdateProductDto): Product | Promise<Product>;
    create(dto: CreateProductDto): Product | Promise<Product>;
    findOne(id: Product['id']): Product | undefined | Promise<Product | undefined>;
  }