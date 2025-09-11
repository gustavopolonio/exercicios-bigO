// Dado um array de números inteiros nums e um número alvo target, encontre os índices de dois números de nums que a soma deles é igual ao valor alvo.

// Tests:
// twoSum([2,7,11,15], 9)  // [0,1]
// twoSum([3,2,4], 6)      // [1,2]
// twoSum([3,3], 6)        // [0,1]


// 1a solução
function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }
}

// Complexidade
// Tempo: O(n²) -> geralmente tem solução melhor do que criar for aninhados, Ficar esperto com isso em entrevistas!!
// Espaço: O(1)


// 2a solução
function twoSum(nums, target) {
  const seenNumbers = {} // chave: número, valor: índice
 
  for (let i = 0; i < nums.length; i++) {
    const complementNumber = target - nums[i]
 
    if (seenNumbers[complementNumber] !== undefined) {
      return [seenNumbers[complementNumber], i]
    }
   
    seenNumbers[nums[i]] = i
  }
}

// Complexidade
// Tempo: O(n) → percorre o array apenas uma vez
// Espaço: O(n) → no pior caso, seenNumbers pode armazenar todos os números de nums
