import React, { Component } from 'react'
import axios from 'axios'

class PostForm extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         userId:'',
         title:'',
         body:''
      }
    }
    changeHandler=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    submitHandler=e=>{
        e.preventDefault() //to avoid page refresh
        console.log(this.state)
        axios.post('https://jsonplaceholder.typicode.com/posts', this.state)  //post takes 2nd args i.e from where the data has to be send
        .then(response=>{
            console.log(response)
        })
        .catch(error=>{
            console.log(error)
        })
    }
    
  render() {
    const {userId,title,body}=this.state
    return (
      <div>
        <form onSubmit={this.submitHandler}>
            <div>
                <input type='text' name='userId' value={userId} onChange={this.changeHandler}/>
            </div>
            <div>
                <input type='text' name='title' value={title} onChange={this.changeHandler}/>
            </div>
            <div>
                <input type='text' name='body' value={body} onChange={this.changeHandler}/>
            </div>
            <button type='submit'>Sumbut</button>
        </form>
      </div>
    )
  }
}

export default PostForm
