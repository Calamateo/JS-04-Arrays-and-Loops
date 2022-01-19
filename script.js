// Ejercicio #1

let banco = ["Sofia", "David", "Juan"];

// Parte 1
function name(taco) {
  taco = ["Sofia", "David", "Juan"];
  let aux = taco[0];
  taco[0] = taco[1];
  taco[1] = taco[2];
  taco[2] = aux;
  console.log("array en orden alfabetico", taco);
}
name();

// Parte 2
banco.push("Sara", "Agustin");
console.log("dos personas se añadieron a la fila");
console.log(banco);
console.log("una persona pasa a la caja");
banco.shift();
console.log(banco);

// Parte 3
console.log("Aparece renata y va detras de David, y Elena hasta el final");
banco.push("Renata");
let aux = banco[4];
for (let i = 4; i < 1; i--) {
  var n = i - 1;
  banco[i] = banco[n];
}
banco[1] = aux;
banco.push("Elena");
console.log(banco);

// Ejercicio #2
var asterisc = "";
for (let i = 0; i < 5; i++) {
  asterisc = asterisc.concat("* ");
  console.log(asterisc);
}

// Ejercicio #3

let j = 4;
console.log("Se decrementara 0.5 cada vez");
while (j >= 0) {
  console.log(j);
  j -= 0.5;
}

console.log("Imprime todos los números impares entre 1 - 100.");
let impar = 1;
while (impar < 100) {
  console.log(impar);
  impar += 2;
}

var corchete = 6;
var rep = 1;
while (rep <= corchete) {
  rep + console.log("[" + rep + "]");
  rep++;
}

var numero = 1,
  qty = 1;

while (qty <= 19) {
  console.log("n = " + qty + " sum = " + numero);
  qty++;
  numero = numero + qty;
}
