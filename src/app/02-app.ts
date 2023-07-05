import { ProductMemoryService } from "./services/product-services";
import { Product } from './models';

const productService = new ProductMemoryService();

productService.create({
    title: 'producto1',
    price: 3000,
    categoryId: 12,
    description: 'aqui una descripcion epica',
    images: [],
})
productService.create({
    title: 'producto2',
    price: 4000,
    categoryId: 12,
    description: 'aqui una descripcion epica',
    images: [],
})

const product = productService.getAll();
const product1 = product[0].id
const product2 = product[1].id

productService.update(product1, {
    title: 'titulo epico',
    description: 'descripcion epica'
})
const rta = productService.findOne(product1)
const rta2 = productService.findOne(product2)
console.log(rta);
console.log(rta2);






