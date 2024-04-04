import React, { Component } from 'react'

class Formulaire extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         username: ''
      }
    }

    changeForm = (event) =>{
        this.setState({
            username: event.target.value
        })
    }

  render() {
    return (
      <form>
        <h1>
            Composant Formulaire
        </h1>
        <label for='textInput'>Tapez votre texte ici !!!</label>
        <input type='text' id='textInput' value={this.state.username} onChange={this.changeForm}/>
      </form>
    )
  }
}

export default Formulaire