const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 12, 4, 0];

// O(n^2)
function sort(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    let min = i;
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[j] < numbers[min]) {
        min = j;
      }
    }
    const tmp = numbers[i];
    numbers[i] = numbers[min];
    numbers[min] = tmp;
  }
  return numbers;
}

console.log(sort(numbers));
