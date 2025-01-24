import React, { Component } from 'react'
import { UserConsumer } from './UserContext'

class ContextC extends Component {
  render() {
    return (
      <UserConsumer>
        {(username)=>{
         return <div>Hello {username}</div>
        }}
      </UserConsumer>
    )
  }
}

export default ContextC
