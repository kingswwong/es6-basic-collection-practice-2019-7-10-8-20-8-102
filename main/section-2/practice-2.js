'use strict';

module.exports = function countSameElements(collection) {
  let temp = collection.reduce((re, cur) => {
    let letter = cur.split("-")[0];
    let count = cur.split("-")[1] === undefined ? 1 : cur.split("-")[1]
    re[letter] ? re[letter] += parseInt(count) : re[letter] = parseInt(count);
    return re;
  },{})
  let keys = Object.keys(temp);
  let result = [];
  keys.forEach(key => {
    result.push({key: key, count: temp[key]})
  })
  return result;
}
