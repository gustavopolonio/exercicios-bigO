// Dado um número inteiro n, crie uma função que imprima os números de 1 até n.
// Para múltiplos de 3, imprima "Fizz".
// Para múltiplos de 5, imprima "Buzz".
// Para múltiplos de 3 e de 5, imprima "FizzBuzz"

// Tests:
// n = 5 -> Saída: 1, 2, "Fizz", 4, "Buzz"
// n = 10 -> Saída: 1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz"
// n = 15 -> Saída: ..., 13, 14, "FizzBuzz"


function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz')
    } else if (i % 3 === 0) {
      console.log('Fizz')
    } else if (i % 5 === 0) {
      console.log('Buzz')
    } else {
      console.log(i)
    }
  }
}

// Complexidade
// Tempo: O(n) -> linear: n é o número inteiro inicial
// Espaço: O(1) -> constante