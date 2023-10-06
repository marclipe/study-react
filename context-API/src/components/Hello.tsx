import { useContext } from "react"
import { MyContext } from "../context/MyContext"

export function Hello() {
  
  const { text, setText } = useContext(MyContext);

  return (
    <div>
      <h1>{text}</h1>
      <button onClick={() => setText('Hello World!')}>
        Click me
      </button>
    </div>
  )
}