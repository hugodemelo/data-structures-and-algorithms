const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 12, 4, 0];

// O(n^2)
function sort(numbers) {
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let k = 0, j = k + 1; k < numbers.length - 1; j++, k++) {
      if (numbers[k] > numbers[j]) {
        const tmp = numbers[k];
        numbers[k] = numbers[j];
        numbers[j] = tmp;
      }
    }
  }
  return numbers;
}

console.log(sort(numbers));
