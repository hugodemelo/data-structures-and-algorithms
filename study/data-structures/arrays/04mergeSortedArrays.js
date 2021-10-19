function merge(arr1, arr2) {
  return [...arr1, ...arr2].sort((a, b) => {
    if (a < b) {
      return -1;
    } else if (a > b) {
      return 1;
    } else {
      return 0;
    }
  });
}

function merge2(arr1, arr2) {
  if (arr1.length === 0) {
    return arr2;
  }

  if (arr2.length === 0) {
    return arr1;
  }

  let i = (j = 0);
  let itemArr1 = arr1[i];
  let itemArr2 = arr2[j];

  const result = [];
  while (itemArr1 || itemArr2) {
    if (!itemArr2 || itemArr1 < itemArr2) {
      result.push(itemArr1);
      itemArr1 = arr1[++i];
    } else {
      result.push(itemArr2);
      itemArr2 = arr2[++j];
    }
  }
  return result;
}

console.log(merge2([0, 3, 4, 31], [4, 6, 30])); // [0, 3, 4, 4, 6, 30, 31]
