import { useState } from "react"

interface MySentenceProps {
  text: string;
  year: number;
}

const MySetence = ({ text, year }: MySentenceProps) => {
  return (
    <div>
      <h1>{text}</h1>
      <p>{year}</p>
    </div>
  )
}

export const Prop = () => {
  const sentence = "'From Piauí to the world!'"
  const yearOfSentence = 2019

  const [isShow, setIsShow] = useState(true);

  const handleToggle = () => {
    setIsShow(!isShow)
  }

  return (
    <div>
      <button onClick={handleToggle} type="button">
        Toggle
      </button>
      { isShow ? <MySetence text={sentence} year={yearOfSentence}/> : null}
    </div>
  )
}