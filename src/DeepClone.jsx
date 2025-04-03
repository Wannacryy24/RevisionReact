import React from 'react'

export default function DeepClone() {
    const obj = {
        a: 1,
        b :{
            c:3,
            d:4,
            e:['E']
        },
        f:undefined,
        g:() => ``
    }   
    
    function deepClone(newObj) {
        if(typeof newObj !== 'object' || newObj === null) return newObj;

        const clone = Array.isArray(newObj) ? [] : {}
        for(let key in newObj){
            clone[key] = deepClone(newObj[key])
        }
        
        return clone;
    }

    const newArray = deepClone(obj);
    newArray.g =() => `hello`
    console.log(newArray);
    
  return (
    <div>DeepClone</div>
  )
}

