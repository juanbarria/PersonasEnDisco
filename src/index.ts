let capacidadDisco: number[] = new Array(270);
let menores21: number = 0;
let mayores21: number = 0;

function getRndInteger ( min , max : number): number {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

for (let indice = 0; indice < capacidadDisco.length; indice++) {
  
  capacidadDisco[indice] = getRndInteger(19,40);
  if (capacidadDisco[indice] < 21) {
    menores21++
    
  } else{
    mayores21++
  } 
}

console.log("La capacidad TOTAL es ",capacidadDisco.length);
console.log("La cantidad de personas menores a 21 es",menores21);
console.log("La cantidad de personas mayores a 21 es",mayores21);
