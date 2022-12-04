import React from 'react'

function Person({personProp}) {
  return (
    <h2>{personProp.name} = {personProp.age}</h2>
  )
}

export default Person