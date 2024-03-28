import React from 'react'

function ComposantEnfant(props) {
  return (
    <div>
        <button onClick={props.saluerHand}>Appuyer Ici</button>
    </div>
  )
}

export default ComposantEnfant