import React, { Component } from 'react'

class ComposantParent extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         parentName: "Parent"
      }

      this.saluerParent = this.saluerParent.bind(this)
    }

    saluerParent(){
        alert(`Bonjour ${this.state.parentName}`)
    }

  render() {
    return (
      <div>
       
      </div>
    )
  }
}

export default ComposantParent