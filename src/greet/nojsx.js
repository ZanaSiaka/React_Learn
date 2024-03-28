import React from "react";

function NoJsx(props){
    // console.log(props)
    // props.name = 'Zana'

    const {name} = props
    return (
        <nav>
            <a href="#"> {name} </a>

        </nav>
    )
}

export default NoJsx