import React, { Component } from 'react'
import Child from './Child'
class Parent extends Component {
    constructor(props) {
      super(props)
      this.state = {
         parentName:'Aishwarya'
      }
      this.greetParent=this.greetParent.bind(this);
    }
   greetParent(childName,age){
    // alert("Hello "+this.state.parentName);
    alert(`Hello ${this.state.parentName} from ${childName} and your child age is ${age}`)
   }
    
  render() {
    return (
      <div>
        <Child greetHandler={this.greetParent}/>
        {/* <Child greetHandler={()=>{this.greetParent()}}/> */}
      </div>
    )
  }
}

export default Parent

