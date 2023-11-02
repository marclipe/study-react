import { useState } from "react";
import { sculptureList } from "./data";

export function Gallery() {
  //The [ and ] syntax here is called array destructuring and it lets you read values from an array.
  const [index, setIndex] = useState(0);

  function handleClick() {
     if (index < sculptureList.length - 1) {
       setIndex(index + 1);
     }
  }

  function handlePrev() {
    if (index > 0) {
      setIndex(index - 1);
    }
  }

  let sculpture = sculptureList[index];
    
  return (
    <>
      <button onClick={handlePrev} disabled={index === 0}>
        Prev
      </button>
      <button
        onClick={handleClick}
        disabled={index === sculptureList.length - 1}
      >
        Next
      </button>

      <h2>
        <i>{sculpture.name}</i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>

      <img src={sculpture.url} alt={sculpture.alt} />
      <p>{sculpture.description}</p>
    </>
  );
}