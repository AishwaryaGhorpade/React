import React, { Component } from 'react'
import RegularCompo from './RegularCompo'
import PureCompo from './PureCompo'
import Mem0Compo from './Mem0Compo'

class ParentCompo extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'Aish'
      }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:'Aish'
            })
        },2000)
    }
    
  render() {
    console.log("******Parent Component Render******")
    return (
      <div>
        Parent Component
        {/* <RegularCompo name={this.state.name}/>
        <PureCompo name={this.state.name}/> */}

        <Mem0Compo name={this.state.name}/>
      </div>
    )
  }
}

export default ParentCompo
