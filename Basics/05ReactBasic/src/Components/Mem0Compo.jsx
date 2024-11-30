import React from 'react'

function Mem0Compo({name}) {
    console.log("memo component rendering")
  return (
    <div>
      {name}
    </div>
  )
}

export default React.memo(Mem0Compo)
