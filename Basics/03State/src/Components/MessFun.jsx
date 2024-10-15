import React from "react";
import { useState } from "react";
const MessFun=()=>{
    const[state,setState]=useState("Hello Visitor")
    return(
        <div>
            <h2>{state}</h2>
            <button onClick={()=>setState("Thank you for Subscribing")}>subscribe</button>
        </div>
    )
}
export default MessFun