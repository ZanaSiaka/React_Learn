import React, { useState } from "react";


function Greet(){
    const [state, setState] = useState(1)
    console.log(state)
    return (
        <div>
            <h1>{state}</h1>
            <button onClick={()=> setState(state + 1)}>Clique oim</button>
        </div>
    )
}

export default Greet;