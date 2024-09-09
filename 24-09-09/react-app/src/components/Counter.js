import { useState } from "react"
import React from "react"

const Counter = () => {
  const [counter, setCounter] = useState(0)

  const modifyCounter = element =>
    setCounter(prevcounter => prevcounter + element)
  return (
    <>
      <h1>{counter}</h1>

      {[+1, +5, +50, -1, -5, -50].map(element => (
        <button onClick={() => modifyCounter(element)}>{element}</button>
      ))}
    </>
  )
}

export default Counter
