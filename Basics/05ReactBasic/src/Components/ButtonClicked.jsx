import React, { Component } from 'react'
import updatedComponent from '../HOCcounter'

class ButtonClicked extends Component {
  
  render() {
    const {count,incrementMethod}=this.props
    return (
      <div>
        <button onClick={incrementMethod}>Clicked {count} time</button>
      </div>
    )
  }
}

export default updatedComponent(ButtonClicked,10)

