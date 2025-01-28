import React, { useState } from 'react'

function UseStateWithObj() {
    const [name,setName]=useState({firstName:'',lastName:''})
    // UseState hook with Object variable
  return (
    <div>
      <form action="">
      <input type='text' value={name.firstName} onChange={e=>setName({...name,firstName:e.target.value})}/>
      <input type='text' value={name.lastName} onChange={e=>setName({...name,lastName:e.target.value})}/>
      <h2>FirstName:{name.firstName}</h2>
      <h2>LastName:{name.lastName}</h2>
    {/* set function does not atomatically merge and update ,so use the spread operator for merge&update the name  */}

      <h2>{JSON.stringify(name)}</h2>  {/* return name obj */}
      </form>
    </div>
  )
}

export default UseStateWithObj
