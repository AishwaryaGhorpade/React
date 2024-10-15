import React, { Component } from 'react'

export class Conditional extends Component {
    constructor(props) {
      super(props)
      this.state = {
        isLoggedIn:true
      }
    }
    
  render() {
    // if(this.state.isLoggedIn)
    // {
    //     return <div>Welcome Aish</div>
    // }
    // else{
    //     return <>Welcome Guest</>
    // }
//this is not proper way of using condition rendering in react

     //here proper way of using condition rendering in react
     //element variable approach

    //  let message;
    //  if(this.state.isLoggedIn)
    //     message=<div>Welcome Aishwarya</div>
    // else
    //     message=<div>Welcome Guest</div>
    // //return {message}    this will not give output
    // return <div>{message}</div>

    // or use Ternary operator

     return( 
     this.state.isLoggedIn ?
    <div>Welcome Aish</div> :
    <div>Welcome Guest</div>
     )

  }
}

export default Conditional

