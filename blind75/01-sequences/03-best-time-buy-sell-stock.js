/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 */
var maxProfit = function (prices) {
  let minSoFar = prices[ 0 ];
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    maxProfit = Math.max(maxProfit, prices[ i ] - minSoFar);
    minSoFar = Math.min(minSoFar, prices[ i ]);
  }
  return maxProfit;
};
