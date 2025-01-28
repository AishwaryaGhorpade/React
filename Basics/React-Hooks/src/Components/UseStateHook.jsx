import React,{useState} from 'react'


function UseStateHook() {
const initialVal=0
const [cnt,setCount]=useState(initialVal)
//state variable can a number,boolean,string ,array or object

const incrementFive=()=>{
    for(let i=0;i<5;i++)
    {
        setCount((prevVal)=>prevVal+1)
    }
}

  return (
    <div>
       count: {cnt}
       {/* <button onClick={()=>setCount(cnt+1)}>Increment</button>   It is not safe method */}
      <button onClick={()=>setCount(initialVal)}>Reset</button>
      <button onClick={()=>setCount((prevVal)=>prevVal+1)}>Increment</button>  {/*safe method*/}
      <button onClick={()=>setCount((prevVal)=>prevVal-1)}>Decrement</button>
      <button onClick={incrementFive}>Increase 5</button>
      {/* <button onClick={()=>setCount((prevVal)=>prevVal+5)}>Increase 5</button> */}
    </div>
  )
}

export default UseStateHook
