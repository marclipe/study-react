import { useState } from "react";

interface CreateListProps {
  id: number, 
  text: string
}

function createList() {
  const initialList: CreateListProps[] = []
  for (let i = 0; i < 0; i++) {
    initialList.push(
      {
        id: i,
        text: 'Item ' + (i + 1)
      }
    )
  }

  return initialList
}

export const List = () => {
  const [list, setList] = useState(createList())
  const [text, setText] = useState('')

  return (
    <>
      <input
        value={text}
        onChange={function (event) {
          setText(event.target.value);
        }}
        required
      />
      <button
        onClick={function () {
          setText("");
          setList([
            {
              id: list.length,
              text: text,
            },
            ...list,
          ]);
        }}
      >
        Add
      </button>
      <ul>
        {list.map((item) => (
          <li key={item.id}>
            {item.text}
          </li>
        ))}
      </ul>
    </>
  );
}