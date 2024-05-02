import React, { PureComponent } from 'react'

class ComposantPur extends PureComponent {
  render() {
    console.log('Pure composant')
    return (
      <div>
        Composant Pur {this.props.nom}
      </div>
    )
  }
}

export default ComposantPur
