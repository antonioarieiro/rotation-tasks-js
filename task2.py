
#Dado a sequência de Fibonacci,
 #onde se inicia por 0 e 1 e o próximo valor sempre será a 
 #soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), 
 #escreva um programa na linguagem que desejar onde, informado um número, 
 #ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o 
# número informado pertence ou não a sequência.

# Definindo as variáveis para os dois primeiros números da sequência
num1 = 0
num2 = 1
fibonacci = [0, 1] # Iniciando a sequência de Fibonacci com os dois primeiros números

# Pedindo um número para verificar se pertence à sequência
num_informado = int(input("Digite um número para verificar se ele pertence à sequência de Fibonacci: "))

# Loop para gerar os próximos números da sequência até que o número informado seja atingido ou ultrapassado
while num2 < num_informado:
    proximo_num = num1 + num2
    fibonacci.append(proximo_num)
    num1 = num2
    num2 = proximo_num

# Verificando se o número informado pertence à sequência
if num2 == num_informado or num_informado in fibonacci:
    print(num_informado, "pertence à sequência de Fibonacci!")
else:
    print(num_informado, "não pertence à sequência de Fibonacci.")