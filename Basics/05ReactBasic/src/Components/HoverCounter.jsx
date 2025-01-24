import React, { Component } from 'react'
import updatedComponent from '../HOCcounter'

class HoverCounter extends Component {
  
  render() {
    const {count,incrementMethod}=this.props
    return (
      <div>
        <h2 onMouseOver={incrementMethod}>{this.props.name} Hovered {count} times</h2>
      </div>
    )
  }
}

export default updatedComponent(HoverCounter,5)

