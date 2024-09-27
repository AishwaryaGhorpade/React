// import React from React
const Welcome=(props)=>{
    // props.name="Radhe"   props are immutable  ,cannot change the value
    console.log(props)  //props is the object that holds obj properties & proto_type
    return(
        //  we should wrap multiple statements in the return by <> </> or by div tag
        <>
        <h2>Hello {props.name}</h2>
        {props.children}
        </>
    )
}
export default Welcome