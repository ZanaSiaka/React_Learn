import React, { useState } from "react";


function Greet(){
    const [o, ok] = useState('Bonjour Zana')
    // console.log(state)
    return (
        <div>
            <h1>{o}</h1>
            <button onClick={()=> ok("Salut Sigata")}>Clique ici</button>
        </div>
    )
}

export default Greet;