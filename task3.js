/*
a) A lógica é adicionar 2 ao número anterior. Portanto, o próximo elemento é 9.

b) A lógica é multiplicar por 2 o número anterior. Portanto, o próximo elemento é 128.

c) A lógica é adicionar o próximo número ímpar. Portanto, o próximo elemento é 49.

d) A lógica é adicionar 4 ao quadrado do número anterior. Portanto, o próximo elemento é 100.

e) A lógica é somar os dois números anteriores. Portanto, o próximo elemento é 13.

*/
// a) 1, 3, 5, 7, ___
let a = [1, 3, 5, 7];
let proximoA = a[a.length - 1] + 2;
console.log("a) O próximo elemento é:", proximoA);

// b) 2, 4, 8, 16, 32, 64, ____
let b = [2, 4, 8, 16, 32, 64];
let proximoB = b[b.length - 1] * 2;
console.log("b) O próximo elemento é:", proximoB);

// c) 0, 1, 4, 9, 16, 25, 36, ____
let c = [0, 1, 4, 9, 16, 25, 36];
let proximoC = Math.pow(c.length, 2);
console.log("c) O próximo elemento é:", proximoC);

// d) 4, 16, 36, 64, ____
let d = [4, 16, 36, 64];
let proximoD = Math.pow(d.length + 1, 2);
console.log("d) O próximo elemento é:", proximoD);

// e) 1, 1, 2, 3, 5, 8, ____
let e = [1, 1, 2, 3, 5, 8];
let proximoE = e[e.length - 1] + e[e.length - 2];
console.log("e) O próximo elemento é:", proximoE);
