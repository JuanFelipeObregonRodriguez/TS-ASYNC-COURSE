import { HttpService } from "./services/http.services";

(async()=>{

    const products = new HttpService();
 
    console.log('---'.repeat(10));
    const product = await products.getAll();
    //console.log(product);
    
    const product1 = product[0].id

    products.update(product1, {
        title: 'title changed',
        description: 'esta descripcion está siendo actualizada'
    })

    const product1U = await products.findOne(product1);
    console.log(product1U);
    
})();