import Modal from 'react-modal'
import { ContainerNewTransactionModal } from './styles';
import closeImg from '../../assets/close.svg';

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