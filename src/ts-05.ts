export class Animal{
    constructor(protected name:string){}

    move(): void{
        console.log('moving');      
    }
    greeting(): string{
        return `soy ${this.name}`
    }
}
export class Perro extends Animal{

    constructor(name: string, public owner: string){
        super(name)
    }

    woof(wooff: number): void{
      for (let index = 0; index < wooff; index++) {
           console.log('woof!!!');   
      }
    }
}

const primerAnimal = new Animal('milan');
console.log(primerAnimal.greeting());
console.log(primerAnimal.move());

const primerPerro = new Perro('motas', 'juan');
console.log(primerPerro.greeting());
console.log(primerPerro.woof(4));



