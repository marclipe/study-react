import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 74rem; //A width é 1120px, para ter um espaçamento a width ficou um pouco menor;
  height: calc(
    100vh - 10rem
  ); //O tamanho da altura total da tela menos um certo valor
  margin: 5rem auto; //-10rem é para deixar um margin em cima e embaixo, nas laterais coloco auto para ficar centralizado
  padding: 1.5rem;

  background: ${(props) => props.theme['gray-800']};
  border-radius: 8px;

  display: flex;
  flex-direction: column;
`
