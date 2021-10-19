const numbers = [ 1, 2, 3, 4, 5, 6, 7, 8 ];

function search(array, num) {
  let start = 0;
  let end = array.length - 1;

  while (start <= end) {
    const middle = Math.floor((start + end) / 2);

    if (array[ middle ] === num) {
      return num;
    }

    if (array[ middle ] < num) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }
}

console.log(search(numbers, 1));
console.log(search(numbers, 2));
console.log(search(numbers, 3));
console.log(search(numbers, 4));
console.log(search(numbers, 5));
console.log(search(numbers, 6));
