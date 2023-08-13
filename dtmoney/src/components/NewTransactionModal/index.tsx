import Modal from 'react-modal'
import {
  ContainerNewTransactionModal,
  TransactionTypeContainer,
} from "./styles";
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'

interface NewTransactionModal {
  isOpen: boolean; 
  onRequestClose: () => void;
}

export function NewTransactionModal({  
isOpen, onRequestClose }: NewTransactionModal) {
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
          <button type='button'>
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </button>

          <button type="button">
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </button>
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