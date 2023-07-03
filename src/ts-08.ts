export class MyService{

    static instance: MyService | null = null;

    private constructor(private name: string){}

    getName(){
       return this.name 
    }

    static create(name: string){
        if (MyService.instance === null) {
            console.log('solo deberia entrar una vez');
            MyService.instance = new MyService(name)
        }
        return MyService.instance
    }
}

const primerServicio = MyService.create('servicio 1')
console.log(primerServicio.getName);
const primerServicio2 = MyService.create('servicio 2')
console.log(primerServicio2.getName);
const primerServicio3 = MyService.create('servicio 3')
console.log(primerServicio3.getName);
const primerServicio4 = MyService.create('servicio 4')
console.log(primerServicio4.getName);