import React,{Component} from "react";
class Greet extends Component{
    render(){
        return <h4>Hello {this.props.username}</h4>
    }
}
export default Greet