// Dada uma string s, crie uma função que retorne a string invertida.

// Tests:
// "javascript" -> "tpircsavaj"
// "ana" -> "ana"
// "hello" -> "olleh"


// 1a solução
function reverseString(s) {
  let reversedString = "";

  for (let i = s.length - 1; i >= 0; i--) {
    reversedString += s[i]; // concatenação gera nova string
  }

  return reversedString;
}


// Complexidade
// Tempo: Concatenação de string O(n) x for loop O(n) = O(n) x O(n) = O(n²) -> quadrática: n é o tamanho da string
//  - Strings em JavaScript são imutáveis
//  - Cada operação += cria uma nova string copiando toda a string antiga + 1 caractere novo. -> O(n) no pior caso
// Espaço: O(n) -> a variável reversedString cresce até n


// 2a solução
function reverseString(s) {
  return s.split("").reverse().join("");
}

// Complexidade
// Tempo: O(n)
//  - Split, reverse e join são O(n) -> O(n) + O(n) + O(n) = O(3n) = O(n)

// Espaço: O(n)
//  - Split O(n): gera nova estrutura de dados
//  - reverse O(1): não cria nova estrutura de dados
//  - join O(n)
//  - Portanto: O(n) + O(1) + O(n) = O(n)

// Para ver as complexidades dos métodos nativos do JS (split, reverse, join, etc) pode procurar no google ou chatgpt