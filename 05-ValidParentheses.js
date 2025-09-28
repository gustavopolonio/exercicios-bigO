// Dada uma string s contendo apenas os caracteres ()[]{}, determine se é válida.
// Uma string é válida se os parênteses, chaves e etc forem abertos e fechados corretamente.

// Tests:
// isValid("()")      // true
// isValid("()[{}]{}")  // true
// isValid("(]")      // false 


// solução
function isValid(s) {
  const stack = []; // pilha
  const map = {
    ")": "(",
    "]": "[",
    "}": "{"
  };

  for (let char of s) {
    if (["(", "[", "{"].includes(char)) {
      stack.push(char)
    } else if (stack.pop() !== map[char]) {
      return false
    }
  }

  return stack.length === 0;
}


// Complexidade
// Tempo: O(n) -> O(n) for x O(1) array fixo de 3 elementos
// Espaço: O(n) -> no pior caso a pilha guarda os todos o caracteres
