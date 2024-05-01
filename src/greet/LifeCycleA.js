import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

class LifeCycleA extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         nom: 'ZanaSiaka'
      }
      console.log('LifeCycleA COnstructor')
    }

    static getDerivedStateFromProps (props, state){
        console.log('LifeCycleA static getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('LifeCycleA componentDidMount')
    }
    

  render() {
    return (
      <div>
        {console.log('LifeCycleA render')}
        LifeCycle A
        <LifeCycleB />
      </div>
    )
  }
}

export default LifeCycleA
