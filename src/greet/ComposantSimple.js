import React, { Component } from 'react'

class ComposantSimple extends Component {
  render() {
    console.log('Composant regulier ')
    return (
      <div>
        Composant de classe regulier {this.props.nom}
      </div>
    )
  }
}

export default ComposantSimple
