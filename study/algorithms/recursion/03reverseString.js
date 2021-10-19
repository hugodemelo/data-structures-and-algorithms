function reverse(str) {
  if (!str.length) {
    return '';
  }

  function helper(str, i) {
    if (i === 0) {
      return str[ i ];
    }
    return str[ i ] + helper(str, i - 1);
  }

  return helper(str, str.length - 1);
}

console.log(reverse('hugo de melo'));
