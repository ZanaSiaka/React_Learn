import React from 'react'

function Liste() {

    const prs = [
        {
            id: 1,
            name: 'Sigata',
            age: 18,
            skill: 'DevOps'
        },
        {
            id: 2,
            name: 'Salimata',
            age: 15,
            skill: 'MotionDesigner'
        },
        {
            id: 3,
            name: 'Ursula',
            age: 21,
            skill: 'Pharmacienne'
        }

    ]

  return (
    <div>
        {
            prs.map(perso => <h2>Je suis {perso.name}, j'ai {perso.age} ans et je suis {perso.skill} </h2>
)
        }
    </div>
  )
}

export default Liste