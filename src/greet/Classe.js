import React, { Component } from 'react'

class Classe extends Component {

    onMan() {
        console.log('tshuipp')
    }

  render() {
    return (
      <button onClick={this.onMan}>Classe</button>
    )
  }
}

export default Classe