/**
 * https://leetcode.com/problems/non-overlapping-intervals/
 */
var eraseOverlapIntervals = function (intervals) {
  intervals.sort((int1, int2) => int1[ 1 ] - int2[ 1 ]);

  let counter = 0;
  let prev = intervals[ 0 ];
  for (let i = 1; i < intervals.length; i++) {
    if (prev[ 1 ] > intervals[ i ][ 0 ]) {
      counter++
    } else {
      prev = intervals[ i ];
    }
  }
  return counter;
};
