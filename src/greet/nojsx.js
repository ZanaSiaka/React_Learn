import React from "react";

function NoJsx(props){
    // console.log(props)
    // props.name = 'Zana'

    const {name} = props
    return (
        <nav>
            <div>{name}</div>

        </nav>
    )
}

export default NoJsx