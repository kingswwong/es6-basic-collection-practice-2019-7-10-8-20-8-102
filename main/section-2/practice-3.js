'use strict';


module.exports = function countSameElements(collection) {
  let temp = collection.reduce((re, cur) => {
    let letter = [...cur][0];
    const reg = /[0-9]+/
    let count = !cur.match(reg) ? 1 : parseInt(cur.match(reg)[0])
    re[letter] ? re[letter] += parseInt(count) : re[letter] = parseInt(count);
    return re;
  },{})
  let keys = Object.keys(temp);
  let result = [];
  keys.forEach(key => {
    result.push({name: key, summary: temp[key]})
  })
  return result;
}
