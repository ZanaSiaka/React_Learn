import React, { Component } from 'react'

class RefClassComp extends Component {

    constructor(props) {
      super(props)
    
      this.classRef = React.createRef()
    }

    focusInput(){
      this.classRef.current.focus()
    }
    

  render() {
    return (
      <div>
        <input type='text' ref={this.classRef}/>
      </div>
    )
  }
}

export default RefClassComp
