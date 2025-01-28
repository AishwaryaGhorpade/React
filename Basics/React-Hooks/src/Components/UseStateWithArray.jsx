import React, { useState } from 'react'

function UseStateWithArray() {
    const [items,setItems]=useState([])
    // useSate hook using array

   const addItems=()=>{
    setItems([...items,{
        id:items.length,
        value:Math.floor(Math.random() * 10)+1
    }])
   }

  return (
    <div>
      <button onClick={addItems}>Add items</button>
      <ul>
        {
            items.map(items=><li key={items.id}>{items.value}</li>)
        }
      </ul>
    </div>
  )
}

export default UseStateWithArray
