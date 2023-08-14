import Modal from 'react-modal'
import {
  ContainerNewTransactionModal,
  RadioBox,
  TransactionTypeContainer,
} from "./styles";
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { useState } from 'react';

interface NewTransactionModal {
  isOpen: boolean; 
  onRequestClose: () => void;
}

export function NewTransactionModal({  
isOpen, onRequestClose }: NewTransactionModal) {
  const [type, setType] = useState('deposit')

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
      <ContainerNewTransactionModal>
        <h2>Cadastrar transação!</h2>
        <input
          placeholder='Título'
         />

        <input 
          type='number'
          placeholder='Valor' 
        />

        <TransactionTypeContainer>
          <RadioBox
            type='button'
            onClick={() => {setType('deposit')}}
            isActive={type === 'deposit'}
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            onClick={() => {setType('withdraw')}}
            type="button"
            isActive={type === 'withdraw'}
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
          placeholder='Categoria'
         />

         <button type="submit">
          Cadastrar
         </button>
      </ContainerNewTransactionModal>
    </Modal>
  );
}