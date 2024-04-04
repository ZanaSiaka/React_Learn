import React from 'react'

function Ok({nom}) {
  return (
    <div>
       {
        nom.map((nom, index) => <h2>{index}-{nom}</h2>)
       }
    </div>
  )
}

export default Ok