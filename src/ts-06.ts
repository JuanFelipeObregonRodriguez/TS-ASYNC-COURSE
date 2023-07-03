class MyMath{

 static readonly PI = 3.1416;

 static max(...numbers: number[]){
   return numbers.reduce((max, item)=> max > item ? max : item)
 }
 static min(...numbers: number[]){
    return numbers.reduce((min, item) => min >= item ? item : min)
 }
}

console.log(MyMath.PI);
console.log(MyMath.max(55, 22, 66, 54));
console.log(MyMath.min(55, 22, 66, 54));
