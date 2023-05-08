import { useState } from "react";

function Square() {
  const [value, setValue] = useState(null);

  function handleClick() {
    setValue('X')
  }

  return (
    <button 
    className="square"
    onClick={handleClick}
    >
      {value}
    </button>
  )
}

export function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  /*Line: Lifting state up*/
  return (
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}

