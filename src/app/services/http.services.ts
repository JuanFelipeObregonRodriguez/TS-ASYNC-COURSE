import { UpdateProductDto, CreateProductDto } from '../dto/product';
import { Product, ProductService } from '../models';
import axios from 'axios';

export class HttpService implements ProductService {

 
  private url = 'https://api.escuelajs.co/api/v1/products';
  
  private static instance: HttpService | null = null;
  public static getIntance(): HttpService {
    if (HttpService.instance === null) {
      HttpService.instance = new HttpService();
    }

    return HttpService.instance;
  }

  async getAll()  {
      const {data} = await axios.get<Product[]>(this.url);
      return data;
  }
  async create(dto: CreateProductDto){
    const {data} = await axios.post(this.url, dto);
    return data
  }
  async update(id: Product['id'], change: UpdateProductDto){
    const {data} = await axios.put(`${this.url}/${id}`, change);
    return data
  }
  async findOne(id: Product['id']) {
    const {data} = await axios.get(`${this.url}/${id}`);
    return data
}

}
