/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function NoJsx(props){
    console.log(props)
    // props.name = 'Zana'
    return (
        <div>
            <a id="link" className="wesh"> Wesh <h1>{props.name}</h1> </a>
            <a id="link" className="wesh"> Wesh <h1>{props.name}</h1> </a>
            {props.children}
        </div>
        
    )
}

export default NoJsx