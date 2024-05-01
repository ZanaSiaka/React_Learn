import React, { Component } from 'react'

class UpdateB extends Component {

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
