/**
 * https://leetcode.com/problems/merge-intervals/
 */
var merge = function (intervals) {
  intervals.sort((a, b) => a[ 0 ] - b[ 0 ]);

  const stack = [ intervals[ 0 ] ];
  for (let i = 1; i < intervals.length; i++) {
    const top = stack[ stack.length - 1 ];
    if (top[ 1 ] >= intervals[ i ][ 0 ]) {
      stack[ stack.length - 1 ] = [ top[ 0 ], Math.max(top[ 1 ], intervals[ i ][ 1 ]) ];
    } else {
      stack.push(intervals[ i ]);
    }
  }
  return stack;
};
