import React from "react";
import { Component } from "react";

class Greet2 extends Component{
    render(){
        // let a = "Bienvenue chers fans"
        return <h1>{this.props.name}</h1>
    }
}

export default Greet2