import React, { useState } from "react"

const counter = () => {
  const [count, setCount] = useState(0)
  const handleClick = () => setCount(count + 1)

  return (
    <div className="counter">
      <h3>click the button if you like the post</h3>
      <h3>likes {count}</h3>
      <button onClick={handleClick}>click me</button>
    </div>
  )
}

export default counter
