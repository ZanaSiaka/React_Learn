import React from 'react'

function ComposantEnfant({saluerHand}) {
  return (
    <div>
        <button onClick={() => saluerHand('child')}>Appuyer Ici</button>
    </div>
  )
}

export default ComposantEnfant