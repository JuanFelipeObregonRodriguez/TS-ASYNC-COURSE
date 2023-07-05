import axios from "axios";


(async () => {
  const delay = (delay: number) => {
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve('string')
      }, delay);
    });
    return promise;
  };

  const getProducts = async ()=>{
    const products = await axios.get('https://api.escuelajs.co/api/v1/products')
    return products.data
  }
  
console.log('----'.repeat(10));
const response = await delay(2000)
console.log(response);
const responseAPI = await getProducts();
console.log(responseAPI);


}

)();
