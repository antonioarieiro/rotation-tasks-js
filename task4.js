/*
4 - Dois veículos (um carro e um caminhão) saem respectivamente de cidades opostas pela mesma rodovia. O carro de Ribeirão Preto em direção a Franca, a uma velocidade constante de 110 km/h e o caminhão de Franca em direção a Ribeirão Preto a uma velocidade constante de 80 km/h. Quando eles se cruzarem na rodovia, qual estará mais próximo a cidade de Ribeirão Preto?



IMPORTANTE:

a) Considerar a distância de 100km entre a cidade de Ribeirão Preto <-> Franca.

b) Considerar 2 pedágios como obstáculo e que o caminhão leva 5 minutos a mais para passar em cada um deles e o carro possui tag de pedágio (Sem Parar)

c) Explique como chegou no resultado.


Para encontrar a resposta, é necessário calcular o tempo que cada veículo leva para chegar ao ponto de encontro e, em seguida, verificar qual deles está mais próximo de Ribeirão Preto.

Para o carro:

Distância de Ribeirão Preto até o ponto de encontro: 50 km (metade do percurso)
Tempo necessário para percorrer essa distância: 50 km / 110 km/h = 0,4545 horas
Para o caminhão:

Distância de Franca até o ponto de encontro: 50 km (metade do percurso)
Tempo necessário para percorrer essa distância: 50 km / 80 km/h = 0,625 horas
Tempo adicional pelos pedágios: 2 * 5 minutos = 0,0833 horas
Tempo total: 0,625 horas + 0,0833 horas = 0,7083 horas
Como o carro leva menos tempo para chegar ao ponto de encontro, ele estará mais próximo de Ribeirão Preto quando ocorrer o cruzamento.
*/

const prompt = require("prompt-sync")();

const distancia = parseFloat(
  prompt("Digite a distância entre as cidades em km: ")
);
const velocidadeCarro = parseFloat(
  prompt("Digite a velocidade do carro em km/h: ")
);
const velocidadeCaminhao = parseFloat(
  prompt("Digite a velocidade do caminhão em km/h: ")
);

const tempoCarro = distancia / velocidadeCarro;
const tempoCaminhao = distancia / velocidadeCaminhao + 0.0083 * 2; // 5 minutos de atraso em cada pedágio (considerando 2 pedágios)

const distanciaRibeiraoCarro = tempoCarro * velocidadeCarro;
const distanciaRibeiraoCaminhao =
  distancia - tempoCaminhao * velocidadeCaminhao;

if (distanciaRibeiraoCarro < distanciaRibeiraoCaminhao) {
  console.log("O carro estará mais próximo de Ribeirão Preto.");
} else if (distanciaRibeiraoCaminhao < distanciaRibeiraoCarro) {
  console.log("O caminhão estará mais próximo de Ribeirão Preto.");
} else {
  console.log(
    "O carro e o caminhão estarão na mesma distância de Ribeirão Preto."
  );
}
