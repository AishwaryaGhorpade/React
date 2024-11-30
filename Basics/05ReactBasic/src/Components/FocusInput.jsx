import React, { Component } from 'react'
import InputCompo from './InputCompo'

class FocusInput extends Component {
    constructor(props) {
      super(props)
    
      this.componentRef=React.createRef()
    }
    clickHandler=()=>{
        this.componentRef.current.FocusInput();
    }
    
  render() {
    return (
      <div>
        <InputCompo ref={this.componentRef}/>
        <button onClick={this.clickHandler}>Focus Input</button>
      </div>
    )
  }
}

export default FocusInput
