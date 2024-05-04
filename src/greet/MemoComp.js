import React from 'react'

function MemoComp({nom}) {
    console.log("Memo component")
  return (
    <div>
      {nom}
    </div>
  )
}

export default React.memo(MemoComp)
