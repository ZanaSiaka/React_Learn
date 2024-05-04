import React, { Component } from 'react'
// import ComposantSimple from './ComposantSimple'
// import ComposantPur from './ComposantPur'
import MemoComp from './MemoComp'

class ComposantParentPur extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         nom: 'Sourale'
      }
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({
                nom : 'Sourale'
            })
        }, 1000)
    }
    

  render() {
    console.log('Parent composant')
    return (
      <div>
        Composant parent pour le test de pur composant 
        <MemoComp nom = {this.state.nom}/>
        {/* <ComposantSimple nom = {this.state.nom}></ComposantSimple>
        <ComposantPur nom = {this.state.nom}></ComposantPur> */}
      </div>
    )
  }
}

export default ComposantParentPur
