
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!arguments.length || matrix.length == 0) return []
  return matrix.reduce((arr, item, i) => {
    if (i % 2 != 0) arr = arr.concat(...item.reverse());
    else arr = arr.concat(...item);
    return arr
  }, [])
}
