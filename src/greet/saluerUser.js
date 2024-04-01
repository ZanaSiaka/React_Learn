import React, { Component } from 'react'

class SaluerUser extends Component {

  constructor(props){
    super(props)
  
    this.state = {
      estConnecte: false
    }
  }


  render() {

    return this.state.estConnecte && <div>Bonjour les users</div>

    // return(
    //   this.state.estConnecte ?
    //   <div>Bonjour  les users</div>:
    //   <div>Bienvenues les gars</div>
    // )

    // let message
    // if(this.state.estConnecte){
    //   message = <div>Bonjour  les users</div>
    // }else{
    //   message = <div>Bienvenues les gars</div>
    // }

    // return message

    // if(this.state.estConnecte){
    //   return(
    //       <div>Bonjour les Users</div>
    //   )
    // }else{
    //   return(
    //     <div>Bienvenue à vous</div>
    //   )
    // }

    // return (
    //     <div>
    //       <div>Bonjour les Users</div>
    //       <div>Bienvenue à vous</div>
    //     </div>
    // )
  }
}

export default SaluerUser