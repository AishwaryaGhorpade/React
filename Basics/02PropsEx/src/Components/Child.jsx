import React from 'react'

function Child(props) {
  return (
    <div>
      <button onClick={()=>props.greetHandler('Diya',26)}>Greet Parent</button>
    </div>
  )
}

export default Child
