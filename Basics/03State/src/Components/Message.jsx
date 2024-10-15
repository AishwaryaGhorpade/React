import React,{Component} from "react";
class Message extends Component
{
    // state obj is initialized inside the constructor
    constructor(){
        super()  //super method is called bcz we extend react components class ,the call has made to base class constructor
        this.state={   //state is reserve keyword
        message:'Hello Visitor'
        }
    }
    changeMessage(){
        this.setState({
         message:'Thank you for subscribering'
        })
    }

    render()
    {
        return(
            <div>
            <h2>{this.state.message}</h2>
            <button onClick={()=>{this.changeMessage()}}>Subscribe</button> 
            </div>
        )
    }
}
export default Message