import React from 'react'

const FuncProp = (props) => {
  return (
    <div>
      <button onClick={props.data}>call the function</button>
    </div>
  )
}

export default FuncProp
