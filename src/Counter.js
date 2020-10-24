import React from 'react'


const Counter = props => {
  console.log(props)
  return (
    <div>
      <h1>Counter App</h1>
            <h2>{props.count}</h2>
                  <button onClick={props.handleDec}>DOWN</button>
                   <button onClick={props.reset}>RESET</button>
                        <button onClick={props.handleInc}>UP</button>

    </div>
  )
}

export default Counter;