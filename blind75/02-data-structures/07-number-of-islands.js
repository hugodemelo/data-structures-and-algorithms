/**
 * https://leetcode.com/problems/number-of-islands/
 */
var numIslands = function (grid) {

  const xLength = grid.length;
  const yLength = grid[ 0 ].length;

  let islands = 0;
  for (let i = 0; i < xLength; i++) {
    for (let j = 0; j < yLength; j++) {
      if (grid[ i ][ j ] === '1') {
        dfs(grid, i, j);
        islands++;
      }
    }
  }

  return islands;

  function dfs(grid, i, j) {
    if (i < 0 || i >= xLength
      || j < 0 || j >= yLength
      || grid[ i ][ j ] === '0') {
      return;
    }

    grid[ i ][ j ] = '0';
    dfs(grid, i - 1, j);
    dfs(grid, i + 1, j);
    dfs(grid, i, j - 1);
    dfs(grid, i, j + 1);
  }
};
