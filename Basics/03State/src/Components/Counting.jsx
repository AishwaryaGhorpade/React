import React, { Component } from 'react'

class Counting extends Component {
    constructor()
    {
        super()
        this.state={
            count:0
        }
    }
    // increment(){
    //  this.state.count=this.state.count+1  //dont do direct add bcz updated value will not render in the UI so use setState method
    //  console.log(this.state.count)
    // }

    // increment(){
    //     this.setState({   
    //         count:this.state.count+1
    //       //  console.log(this.state.count) it troughs error sometimes after updating value that value want use or execute other code ,use onther callback function
    //       //setState take 2 args ,1)state obj ,2)callback function (Ex:bellow)
    //     })
    //     console.log(this.state.count)  //calls setState is Syncronous so that this line execute first
    // }
    // increment(){
    //     this.setState({
    //         count:this.state.count+1
    //     },
    //    ()=>{
    //     console.log("count=",this.state.count)  //update value
    //    }
    // )
    // console.log(this.state.count)  //(old value)it calls first before the setState
    // }
    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }  //this will not increment to 5
    //for this use previous count for instrment ,for this pass the function to the setState instead of object (ex:bellow)

    increment(){
        this.setState((preValue,props)=>({
                count:preValue.count+1
            }))
    }

  render() {
    return (
      <div>
        <h1>Count-{this.state.count}</h1>
        {/* <button onClick={()=>{this.increment()}}>Increment</button> */}
        <button onClick={()=>{this.incrementFive()}}>Increment</button>
      </div>
    )
  }
}

export default Counting
