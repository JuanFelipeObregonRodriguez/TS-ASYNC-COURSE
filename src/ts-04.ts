export type bebidas = 'avena' | 'gaseosa' | 'limonada';
export type comida =
  | 'papas'
  | 'empanadas de pollo'
  | 'empanadas de carne'
  | 'arepas';

class pastelesNellys {
  constructor(public comida: comida, public bebidas: bebidas) {}

  combo(comida: string, bebidas: string, precio: number) {
    const combo1 =
      comida === 'papas' && bebidas === 'avena' && precio === 3000
        ? 'compra realizada'
        : 'no le alcanza pobre';

    return combo1;
  }
}
const pastelesNellys1 = new pastelesNellys('papas', 'avena');
console.log(pastelesNellys1);
console.log(pastelesNellys1.combo('papas', 'avena', 2000));
