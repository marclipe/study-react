import Modal from 'react-modal'
import {
  ContainerNewTransactionModal,
  RadioBox,
  TransactionTypeContainer,
} from "./styles";
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { FormEvent, useState } from 'react';
import { api } from '../../services/api';

interface NewTransactionModal {
  isOpen: boolean; 
  onRequestClose: () => void;
}

export function NewTransactionModal({  
isOpen, onRequestClose }: NewTransactionModal) {
  const [title, setTitle] = useState(''); 
  const [value, setValue] = useState(0); 
  const [category, setCategory] = useState('');
  const [type, setType] = useState('deposit')

  //Formato do event passado no parâmetro
  function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault()

    const data = {
      title, 
      value,
      category,
      type,
    }

    api.post('/transactions', data)
  }

  return (
    <Modal 
    isOpen={isOpen} 
    onRequestClose={onRequestClose}
    overlayClassName="react-modal-overlay"
    className="react-modal-content"
    >
      <button 
        type="button" 
        className='react-modal-close' 
        onClick={onRequestClose}
      >
        <img src={closeImg} alt="" />
      </button>
      <ContainerNewTransactionModal onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação!</h2>
        <input
          placeholder='Título'
          value={title}
          onChange={event => setTitle(event.target.value)}
         />

        <input 
          type='number'
          placeholder='Valor' 
          value={value}
          onChange={event => setValue(Number(event.target.value))} //Convert to Number
        />

        <TransactionTypeContainer>
          <RadioBox
            type='button'
            onClick={() => {setType('deposit')}}
            isActive={type === 'deposit'}
            activeColor="green"
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            onClick={() => {setType('withdraw')}}
            type="button"
            isActive={type === 'withdraw'}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
          placeholder='Categoria'
          value={category}
          onChange={event => setCategory(event.target.value)}
         />

         <button type="submit">
          Cadastrar
         </button>
      </ContainerNewTransactionModal>
    </Modal>
  );
}