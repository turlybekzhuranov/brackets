module.exports = function check(str, bracketsConfig) {
  // your solution
  let temp;
  while (str) {
    for (bracket of bracketsConfig) {
      str = str.replace(bracket.join(''), '')
    }
    if (str === temp) {
      return false;
    }
    temp = str;
  }
  return str.length === 0;
}
