import React, { Component } from 'react'

class HoverCounterTwo extends Component {

  render() {
    return (
      <div>
        <h2 onMouseOver={this.incrementCounter}> Hovered {this.state.count} times</h2>
      </div>
    )
  }
}

export default HoverCounterTwo
