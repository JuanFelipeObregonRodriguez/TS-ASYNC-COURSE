export interface Driver{
    database: string;
    password: string;
    port: number

    connect(): void;
    disconnect(): void;
    isConnected(name: string): boolean;
}

export class Postgress implements Driver{

    constructor(public database: string, public password: string, public port: number){}

    connect(): void {
        
    }
    disconnect(): void {
        
    }
    isConnected(name: string): boolean {
        return true
    }
}
export class Sql implements Driver{
    constructor(public database: string, public password: string, public port: number){}

    connect(): void {
        
    }
    disconnect(): void {
        
    }
    isConnected(name: string): boolean {
        return true
    }
}
export class MariDb implements Driver{
 
    constructor(public database: string, public password: string, public port: number){}
    connect(): void {
        console.log('is connect to port 3000');
        
    }
    disconnect(): void {
        console.log('is disconnect from port 3000');
        
    }
    isConnected(name: string): boolean {
      return true       
    }
}

const testMariaDb = new MariDb('mariaDb', '123455', 3000);

console.log(testMariaDb.connect());
console.log(testMariaDb.disconnect());
console.log(testMariaDb.isConnected('en linea'));

