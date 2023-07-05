import axios from 'axios';
import { Product } from './models';

(async () => {
  const getProducts = async () => {
    const { data } = await axios.get<Product[]>(
      'https://api.escuelajs.co/api/v1/products'
    );
    return data;
  };

  const rta = await getProducts();
  console.log(rta.map((item) => `${item.id} - ${item.title}`));
})();
