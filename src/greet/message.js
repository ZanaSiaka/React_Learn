import React, {Component} from "react";


class Greet2 extends Component{
    
    constructor(){
        super()
        this.state = {
            message : 2
        }
    }

    changeMessage(){
        // this.setState ({
        //     message : this.state.message + 1
        // }, () => (console.log('zana', this.state.message) ))

        this.setState((prevState, props)=> ({
            message: prevState.message + 1
        }))
    }

    changeMessageFive(){
        this.changeMessage()
        this.changeMessage()
        this.changeMessage()
        this.changeMessage()
        this.changeMessage()
    }

    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessageFive()}>Cliquez Ici</button>
            </div>

        )
    }
}

export default Greet2