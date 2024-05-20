import React, { Component } from 'react'
import RefClassComp from './RefClassComp'

class FocusInput extends Component {

    constructor(props) {
      super(props)
    
      this.componentRef = React.createRef()
    }
    buttonHandler = () => {
        this.componentRef.current.focus()
    }


  render() {
    return (
      <div>
        <RefClassComp ref={this.componentRef}/>
        <input  />
        <button onClick={this.buttonHandler}>FocusInput</button>
      </div>
    )
  }
}

export default FocusInput
