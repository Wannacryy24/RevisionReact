import React, { useEffect, useState } from 'react'

export default function Fetch() {
    function tryCatch() {
        try{
            var x= 10 / "Number";
            if(x=NaN){
                throw new Error("HAHAHHA");
            }

        } catch(error){
            console.log(error);
        } 
        finally {
            console.log("this will always execute");
        }
    }
    tryCatch()
    
  return (
    <div>Fetch</div>
  )
}
