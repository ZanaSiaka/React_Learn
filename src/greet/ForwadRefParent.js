import React, { Component } from 'react'
import ForwardRefInput from './ForwardRefInput'

class ForwadRefParent extends Component {

  constructor(props) {
    super(props)
  
    this.inputRef = React.createRef()
  }


  

  render() {
    return (
      <div>
        <ForwardRefInput ref={this.inputRef}/>
        <button>Focus Input </button>
      </div>
    )
  }
}

export default ForwadRefParent
