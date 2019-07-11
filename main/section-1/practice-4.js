'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
  let allValue = []
  collectionA.forEach(item => {
    allValue.push(item.key)
  })
  return allValue.filter(item => {
    return objectB.value.indexOf(item) !== -1
  })
}
