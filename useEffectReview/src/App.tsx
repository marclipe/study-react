import { useEffect, useState } from "react";

function avisarAPI() {
  console.log('Lista salva!')
}

export function App() {
  const [list, setList] = useState<string[]>([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    avisarAPI(); 
  }, [list])


  useEffect(() => {
    fetch('http://api.github.com/users/marclipe/repos')
    .then(response => response.json())
    .then(data => {
      //Atualizo a lista com base no que peguei dos repos
      setList(data.map((item: any) => item.full_name))
    })
  }, [])

  function addToList() {
    setList(state => [...state, 'Novo item'])
  }

  const filteredList = list.filter((item) => item.includes(filter));

  return (
    <div>
      <input 
        type="text"
        onChange={e => setFilter(e.target.value)} //Para pegar o evento do input
        value={filter}
      />

      <ul>
        {list.map(item => <li>{item}</li>)}
      </ul>

      <ul>
        {filteredList.map(item => <li>{item}</li>)}
      </ul>

      <button onClick={addToList}>Add to List</button>
    </div>
  )
}