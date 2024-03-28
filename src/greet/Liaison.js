import React, { Component } from 'react'

class Liaison extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         valeur: 'Salut, toi'
      }
    }

    changeValeur(){
        this.setState({
            valeur: 'Aurevoir et merci pour la visite'
        })
        // console.log('first')
    }

  render() {
    return (
      <div>
        <p>{this.state.valeur}</p>
        <button onClick={this.changeValeur.bind(this)}>Liaison</button>
      </div>
    )
  }
}

export default Liaison