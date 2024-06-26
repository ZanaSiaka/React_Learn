import React, { Component } from 'react'

class DemoRef extends Component {

    constructor(props) {
        super(props)
      
        this.inputRef = React.createRef()
        this.cbRef = null

        this.setCbRef = element => {
          this.cbRef = element
        }
      }

      componentDidMount(){

        if(this.cbRef){
          this.cbRef.focus()
        }

        // this.inputRef.current.focus()
        // console.log(this.inputRef)
      }
      
      eventHandler = () =>{
        alert(this.inputRef.current.value)
      }

  render() {
    return (
      <div>
        <input type='text' ref={this.inputRef} />
        <input type='text' ref={this.setCbRef} />
        <button onClick={this.eventHandler}>Click</button>
      </div>
    )
  }
}

export default DemoRef