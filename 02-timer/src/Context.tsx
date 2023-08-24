import { createContext, useContext, useState } from 'react'

// Dentro do parenteses coloco o valor inicial do contexto
// Como guardamos muitas informações usamos quase sempre um objeto
const CyclesContenxt = createContext({} as any) // as any para que o TS no siga um formato de tipagem

function NewCycleForm() {
  const { activeCycle, setActiveCycle } = useContext(CyclesContenxt)
  // Agora consigo acessar o ciclo ativo do corpo do componentes

  return (
    <h1>
      NewCycleForm: {activeCycle}
      <button
        onClick={() => {
          setActiveCycle(2)
        }}
      >
        Alterar ciclo ativo
      </button>
    </h1>
  )
}

function Countdown() {
  const { activeCycle } = useContext(CyclesContenxt)
  // Uma variável compartilhada entre dois componentes
  return <h1>Countdown: {activeCycle}</h1>
}

export function Home() {
  const [activeCycle, setActiveCycle] = useState(0)

  return (
    // No value={} preciso enviar quais informações preciso compartilhar entre todos os componentes
    // A gente envia um objeto com todas as informações que a gente quer enviar
    <CyclesContenxt.Provider value={{ activeCycle, setActiveCycle }}>
      <div>
        <NewCycleForm />
        <Countdown />
      </div>
    </CyclesContenxt.Provider>
  )
}
