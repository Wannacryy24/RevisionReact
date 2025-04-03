import React from 'react'

export default function Val2(messege) {
  console.log(messege);
  
  return (
    <div>Val2

        {
            <h1>{messege.messege}</h1>
        }
    </div>
  )
}
