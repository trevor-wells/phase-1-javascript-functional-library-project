function convertToArray(collection){
    if (!Array.isArray(collection))
        collection = Object.values(collection)
    return collection
}

function myEach(collection, callback){
    const ogCollection = collection
    collection = convertToArray(collection)
    for (const item of collection)
        callback(item)
    return ogCollection
}

function myMap(collection, callback){
    const newArray = []
    collection = convertToArray(collection)
    for (const item of collection)
        newArray.push(callback(item))
    return newArray

}

function myReduce(collection, callback, acc){
    collection = convertToArray(collection)
    debugger
    if (acc === undefined) {
        acc = collection[0]
        collection = collection.slice(1)
    }
    for (const item of collection)
        acc  = callback(acc , item , collection)
    return acc
}

function myFind(collection, predicate){
    collection = convertToArray(collection)
    for (const item of collection)
        if (predicate(item))
            return item
    return undefined
}

function myFilter(collection, predicate){
    collection = convertToArray(collection)
    const newArray = []
    for (const item of collection)
        if (predicate(item))
            newArray.push(item)
    return newArray
}

function mySize(collection){
    collection = convertToArray(collection)
    return collection.length
}

function myFirst(array, int){
    if (int === 1 || !int)
        return array[0]
    const newArray = []
    for (let i = 0 ; i < int ; i++)
        newArray.push(array[i])
    return newArray
}

function myLast(array, int){
    if (int === 1 || !int)
        return array[array.length - 1]
    const newArray =[]
    for (let i = array.length - int ; i < array.length ; i++)
        newArray.push(array[i])
    return newArray
}

const myKeys = function(object) {
    const keys = [];
    for (let key in object){
      keys.push(key);
    }
    return keys;
  }
  
  const myValues = function(object) {
    const values = [];
    for (let key in object){
      values.push(object[key]);
    }
    return values;
  
  }
  