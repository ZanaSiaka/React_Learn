import React, { Component } from 'react'

class UpdateB extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       nom: 'ZanaSiaka'
    }
    console.log('UpdateB COnstructor')
  }

    static getDerivedStateFromProps (props, state){
        console.log('UpdateB static getDerivedStateFromProps')
        return null
    }

    shouldComponentUpdate(){
        console.log('UpadteB shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('UpdateB getSnapShotBeforeUpdate')
        return null
    }

    componentDidUpdate(){
        console.log('UpdateB componentDidUpdate')
    }

  render() {
    console.log('UpdateB render')
    return (
      <div>
        UpadteB
      </div>
    )
  }
}

export default UpdateB
