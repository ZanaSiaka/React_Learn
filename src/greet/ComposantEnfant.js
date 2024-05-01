import React from 'react'

function ComposantEnfant({saluerHand}) {
  return (
    <div>
        <button onClick={() => saluerHand('Zana')}>Appuyer Ici</button>
    </div>
  )
}

export default ComposantEnfant