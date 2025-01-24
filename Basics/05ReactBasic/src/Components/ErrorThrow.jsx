import React, { Component } from 'react'
import Hero from './Hero'
import ErrorBoundary from './ErrorBoundary'

class ErrorThrow extends Component {
  render() {
    return (
      <div>
        <ErrorBoundary>
        <Hero heroName="batsMan"/>
        <Hero heroName="superMan"/>
       
       {/* <Hero heroName="joker"/> */}
        </ErrorBoundary>
      </div>
    )
  }
}

export default ErrorThrow
