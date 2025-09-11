// Dada uma string s, verifique se ela é um palíndromo (lê igual de frente pra trás).

// Tests:
// isPalindrome("arara")    // true
// isPalindrome("ana")      // true
// isPalindrome("banana")   // false


// 1a solução
function isPalindrome(s) {
  return s === s.split("").reverse().join("");
}

// Complexidade
// Tempo: O(n)
//  - Split, reverse e join são -> O(n) + O(n) + O(n) = O(n)
// Espaço: O(n)
//  - Split O(n): gera nova estrutura de dados
//  - reverse O(1): não cria nova estrutura de dados
//  - join O(n)
//  - Portanto: O(n) + O(1) + O(n) = O(n)


// 2a solução
function isPalindrome(s) {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) {
      return false
    }

    left++;
    right--;
  }
  return true;
}

// Complexidade
// Tempo: O(n) -> pior caso faz n/2 iterações -> O(n/2) ~ O(n)
// Espaço: O(1) -> não cria estruturas extras
