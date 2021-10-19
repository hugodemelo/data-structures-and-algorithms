const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 12, 4, 0];

function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }

  // split array into two
  const middle = Math.floor(array.length / 2);
  const right = array.slice(0, middle);
  const left = array.slice(middle);

  return merge(mergeSort(right), mergeSort(left));
}

function merge(right, left) {
  let rightCounter = 0;
  let leftCounter = 0;

  let elemRight = right[rightCounter];
  let elemLeft = left[leftCounter];
  const result = [];

  while (elemRight || elemLeft) {
    if (!elemRight || elemLeft < elemRight) {
      result.push(elemLeft);
      elemLeft = left[++leftCounter];
    } else {
      result.push(elemRight);
      elemRight = right[++rightCounter];
    }
  }
  return result;
}

console.log(mergeSort(numbers));
