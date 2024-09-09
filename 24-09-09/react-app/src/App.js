import "./App.css"
import Counter from "./components/Counter"
import Name from "./components/Name"
import Show from "./components/Show"
import React, { useState } from "react"
import PropDrilling from "./components/PropDrilling"

function App() {
  const [show, setShow] = useState(true)

  const toggleShow = () => setShow(prevShow => !prevShow)
  return (
    <>
      <Show
        show={show}
        toggleShow={toggleShow}
      />
      <PropDrilling />
      <Name title="Hugo" />
      <Name />
      <Counter />
    </>
  )
}

export default App
