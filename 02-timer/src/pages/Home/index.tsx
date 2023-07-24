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

interface Cycle {
  id: string
  task: string
  minutesAmount: number
}

export function Home() {
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [aciveCycleId, setAciveCycleId] = useState<string | null>(null)
  // Vou armazenar o tanto de segundos desde que o ciclo tá ativo
  const [amountSecondPassed, setAmountSecondPassed] = useState(0)

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
    const id = String(new Date().getTime())

    const newCycle: Cycle = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
    }

    setCycles((state) => [...state, newCycle])
    setAciveCycleId(id)

    reset()
  }

  const activeCycle = cycles.find((cycles) => cycles.id === aciveCycleId)
  // console.log(activeCycle)

  // Tenho que lembrar que o meu ciclo tá ativo ou não
  // Se o meu ciclo tiver ativo eu multiplico por 60 se não essa variável vai ser zero
  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0
  // Se eu tiver um ciclo ativo total segundos menos os segundos já passados, se não vai ser zero
  const currentSeconds = activeCycle ? totalSeconds - amountSecondPassed : 0

  // Total de minutos que vou ter
  // Math.floor para arrendondar para baixo
  const minutesAmount = Math.floor(currentSeconds / 60)

  // Agora calculo quantos segundos eu tenho do resto desa divisão
  const secondsAmount = currentSeconds % 60 // Quantos segundos sobram da divisão?

  // Converto meu número de minutos para string para usar padStart()
  const minutes = String(minutesAmount).padStart(2, '0')
  const seconds = String(secondsAmount).padStart(2, '0')

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
          <span>{minutes[0]}</span>
          <span>{minutes[1]}</span>
          <Separator>:</Separator>
          <span>{seconds[0]}</span>
          <span>{seconds[1]}</span>
        </CountdownContainer>

        <StartCountdownButton disabled={isSubmitDisabled} type="submit">
          <Play size={24} />
          Começar
        </StartCountdownButton>
      </form>
    </HomeContainer>
  )
}
