'use strict';

module.exports = function countSameElements(collection) {
  let temp = collection.reduce((re, cur) => {
    re[cur] ? re[cur]++ : re[cur] = 1
    return re;
  },{})
  let keys = Object.keys(temp);
  let result = [];
  keys.forEach(key => {
    result.push({key: key, count: temp[key]})
  })
  return result;
}
