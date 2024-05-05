import React, { Component } from 'react'

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
        <input ref={this.componentRef} />
        <button onClick={this.buttonHandler}>FocusInput</button>
      </div>
    )
  }
}

export default FocusInput
