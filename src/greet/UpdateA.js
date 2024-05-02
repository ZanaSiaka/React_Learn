import React, { Component } from 'react'
import UpdateB from './UpdateB'

class UpdateA extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       nom: 'ZanaSiaka'
    }
    console.log('UpdateA COnstructor')
  }

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
        return null
    }

    componentDidUpdate(){
        console.log('UpdateA componentDidUpdate')
    }

    changeState = () => {
      this.setState({
        nom: 'OdiJunior'
      })
    }

  render() {
    console.log('UpdateA render')
    return (
      <div>
        UpadteA
        <button onClick={this.changeState}>Cliquez ici</button>
        <UpdateB />
      </div>
    )
  }
}

export default UpdateA
