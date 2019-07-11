'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
  let result = []
  collectionB.forEach(cB => {
    collectionA.forEach(cA => {
      if(cB.indexOf(cA) !== -1){
        result.push(cA)
      }
    })
  })
  return result.reduce((re, cur) => {
    if(re.indexOf(cur) === -1){
      re.push(cur)
    }
    return re;
  },[])
}
