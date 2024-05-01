import React, { Component } from 'react'

class LifeCycleB extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         nom: 'ZanaSiaka'
      }
      console.log('LifeCycleB COnstructor')
    }

    static getDerivedStateFromProps (props, state){
        console.log('LifeCycleB static getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('LifeCycleB componentDidMount')
    }
    

  render() {
    return (
      <div>
        {console.log('LifeCycleB render')}
        LifeCycle B
      </div>
    )
  }
}

export default LifeCycleB
