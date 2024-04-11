import React, { Component } from 'react'

class Formulaire extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        username: '',
        commentaire: '',
        framework: ''
      }
    }

    changeForm = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    changerCommentaire = (event) =>{
      this.setState({
        commentaire: event.target.value
      })
    }

    changerFramework = (event) => {
      this.setState({
        framework: event.target.value
      })
    }

    soumissionForm = (event) =>{
      alert (`${this.state.username} ${this.state.commentaire} ${this.state.framework}`)
      event.preventDefault();
    }

  render() {
    return (
      <form onSubmit={this.soumissionForm}>
        <div>
          <h1>Composant Formulaire</h1>
          <label htmlFor='textInput'>Tapez votre texte ici !!!</label>
          <input type='text' id='textInput' value={this.state.username} onChange={this.changeForm}/>
        </div>

        <div>
          <label htmlFor='textarea'>Tapez votre Message ici !!!</label>
          <textarea id='textarea' value={this.state.commentaire} onChange={this.changerCommentaire}></textarea>
        </div>

        <div>
          <label>C'est quoi votre frmework js</label>
          <select value={this.state.framework} onChange={this.changerFramework}>
            <option value='react'>React</option>
            <option value='angular'>Angular</option>
            <option value='vue'>Vue</option>
          </select>
        </div>

        <button type='submit'>Soumettre</button>

      </form>
    )
  }
}

export default Formulaire