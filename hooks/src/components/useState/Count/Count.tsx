import { useState } from "react"

export function Count() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h3>You clicked {count} times!</h3>
      <button onClick={function() {setCount(count + 1)}}>
        Click here
      </button>
    </div>
  )
}