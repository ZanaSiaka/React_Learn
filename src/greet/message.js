import React, {Component} from "react";


class Greet2 extends Component{
    constructor(){
        super()
        this.state = {
            message : 'Message à mes fans'
        }
    }
    
    changeMessage(){
        this.setState ({
            message : 'Holala, mon chouchou'
        })
    }

    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>Cliquez Ici</button>
            </div>

        )
    }
}

export default Greet2