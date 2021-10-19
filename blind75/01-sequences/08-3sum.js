/**
 * https://leetcode.com/problems/3sum/
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);

  const result = [];
  const elected = {};
  for (let i = 0; i < (nums.length - 2); i++) { // -2 because you need to compute 3 elements
    const diff = 0 - nums[ i ];
    let start = i + 1;
    let end = nums.length - 1;
    while (start < end) {
      const sum = nums[ start ] + nums[ end ];
      if (sum > diff) {
        end--;
      } else if (sum < diff) {
        start++;
      } else {
        const key = `${ nums[ i ] },${ nums[ start ] },${ nums[ end ] }`;
        if (key in elected) {
          break;
        }
        elected[ key ] = undefined;
        result.push([ nums[ i ], nums[ start ], nums[ end ] ]);

        while (nums[ start ] === nums[ start + 1 ]) {
          start++;
        }
        start++; // actually skip repeated value

        while (nums[ end ] === nums[ end - 1 ]) {
          end--;
        }
        end--;  // actually skip repeated value
      }
    }
  }
  return result;
};
