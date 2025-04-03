import React from 'react'
import UseMemo2 from './UseMemo2'
import DeepClone from './DeepClone'

export default function App() {

  // Write a function to reverse a string without using .reverse().

  function reverseString(str) {
    if(typeof str !=='string' || str===null || str==='') return;
    var newStr = '';
    for(var i=str.length-1; i>=0;i--){
      newStr = newStr.concat(str[i])
    }
    return newStr;
}
console.log(reverseString("hello"));


  // ==========================================================================
  // Implement a function to deep clone an object manually (without structuredClone() or JSON.parse()).
  function deepClone(obj) {
    if(typeof obj !== 'object' || obj === null) return obj

    const clone = Array.isArray(obj) ? [] : {}

    for(let key in obj){
      clone[key] = deepClone(obj[key])
    }
    return clone
}

const obj = { a: 1, b: { c: 2, d: [3, 4] } };
const clonedObj = deepClone(obj);
console.log(clonedObj);


// ==============================================================================================================
//  Write a function that flattens a nested array into a single-level array using recursion.

function flattenArray(arr) {
  if(!Array.isArray(arr)) return arr;
  
  let result = [];
  for (let item of arr){
    if(Array.isArray(item)){
      result = result.concat(flattenArray(item))
    }
    else{
      result.push(item);
    }
  }  
  return result
}

console.log(flattenArray([1, [2, 3, [4, 5]], 6])); 
// Output: [1, 2, 3, 4, 5, 6]

















  return (
    <>
      {/* <DeepClone/> */}
    </>
  )
}
