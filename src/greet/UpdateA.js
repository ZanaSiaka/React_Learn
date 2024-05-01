import React, { Component } from 'react'
import UpdateB from './UpdateB'

class UpdateA extends Component {

    static getDerivedStateFromProps (props, state){
        console.log('UpdateA static getDerivedStateFromProps')
        return null
    }

    shouldComponentUpdate(){
        console.log('UpadteA shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('UpdateA getSnapShotBeforeUpdate')
    }

    componentDidUpdate(){
        console.log('UpdateA componentDidUpdate')
    }

  render() {
    console.log('UpdateA render')
    return (
      <div>
        UpadteA
        <UpdateB />
      </div>
    )
  }
}

export default UpdateA
