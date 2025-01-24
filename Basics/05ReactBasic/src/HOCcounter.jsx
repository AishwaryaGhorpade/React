{/* higher order Component(HOC) -A pattern where function takes component as agrument return a NewComponents*/}
{/* const newComponent=HOC(originalComponent) */}
{/*why: HOC used?  -> to share common functionaly between components  */}

import React from "react";
const updatedComponent=(OriginalComponent,increment)=>{
  class newComponent extends React.Component{
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    incrementMethod=()=>{
      this.setState(prev=>{
        return{count:prev.count+increment}
      })
    }
    render(){
      return <OriginalComponent count={this.state.count} incrementMethod={this.incrementMethod} {...this.props}/>
      // {...this.props}   ->is used to display remaining props (... is spread operator)
    }
  }
  return newComponent
}
export default updatedComponent