import { Play } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useState } from 'react'

import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmoutInput,
  Separator,
  StartCountdownButton,
  TaskInput,
} from './styles'

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod
    .number()
    .min(5, 'O ciclo precisa ser de no mínimo 5 minutos')
    .max(60, 'O ciclo precisa ser de no máximo 60 minutos'),
})

// Para definir o formato dos ciclos
interface Cycle {
  // Preciso de um id para representar unicamente um ciclo
  id: string
  task: string // um ciclo tem um tarefa
  minutesAmount: number // quant.. de minutos
}

export function Home() {
  // Vamos usar estado, para armazenar um novo ciclo no nosso component
  const [cycles, setCycles] = useState<Cycle[]>([]) // Vou armazenar uma lista de ciclos no meu estado, um array de ciclos
  // Vamos usar um estado para indicar se o ciclo está ativo ou não
  const [aciveCycleId, setAciveCycleId] = useState<string | null>(null)

  // eslint-disable-next-line no-use-before-define
  const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

  function handleCreateNewCycle(data: NewCycleFormData) {
    // Crio uma variável para facilitar o uso do id
    const id = String(new Date().getTime())

    const newCycle: Cycle = {
      id, // Vai pegar a data atual em milissegundos, a gente converte ese id para uma string
      task: data.task,
      minutesAmount: data.minutesAmount,
    }

    // Preciso copiar todos os ciclos que já tenho
    setCycles((state) => [...state, newCycle])
    setAciveCycleId(id) // seto o novo ciclo ativo

    reset()
  }

  // Crio uma variável, para retornar o mesmo id do ciclo ativo
  // ela vai percorrer o Array e vai encontrar o id que seja igual ao id do ciclo ativo
  const activeCycle = cycles.find((cycles) => cycles.id === aciveCycleId)
  console.log(activeCycle)

  const task = watch('task') // Controlled Component
  const isSubmitDisabled = !task

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            id="task"
            list="task-suggestions"
            placeholder="Dê um nome para o seu projeto"
            {...register('task')}
          />

          <datalist id="task-suggestions">
            <option value="Projeto 1" />
            <option value="Projeto 2" />
            <option value="Projeto 3" />
          </datalist>

          <label htmlFor="">durante</label>
          <MinutesAmoutInput
            type="number"
            id="minutesAmount"
            placeholder="00"
            step={5}
            min={5}
            max={60}
            {...register('minutesAmount', { valueAsNumber: true })}
          />

          <span>minutos.</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartCountdownButton disabled={isSubmitDisabled} type="submit">
          <Play size={24} />
          Começar
        </StartCountdownButton>
      </form>
    </HomeContainer>
  )
}
