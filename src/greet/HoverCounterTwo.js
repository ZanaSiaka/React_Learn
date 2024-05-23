import React, { Component } from 'react'

class HoverCounterTwo extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }

    incrementCounter = () => {
        this.setState(prevstate =>{
            return {count: prevstate.count + 1}
        })
    }

  render() {
    return (
      <div>
        <h2 onMouseOver={this.incrementCounter}> Hovered {this.state.count} times</h2>
      </div>
    )
  }
}

export default HoverCounterTwo
