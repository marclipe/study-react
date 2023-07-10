import { styled } from 'styled-components'

export const HistoryContainer = styled.main`
  flex: 1;
  padding: 3.5rem;

  display: flex;
  flex-direction: column;

  h1 {
    font-size: 1.5rem;
    color: ${(props) => props.theme['gray-100']};
  }
`

export const HistoryList = styled.div`
  flex: 1;
  overflow: auto;
  margin-top: 2rem;

  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 600px; //quando ele estiver em tamanho menor ele gere o scroll

    th {
      background-color: ${(props) => props.theme['gray-600']};
      padding: 1rem;
      text-align: left; //por padrão vem como center
      color: ${(props) => props.theme['gray-100']};
      font-size: 0.875rem;
      line-height: 1.6; //160%

      &:first-child {
        border-top-left-radius: 8px; //para arredondar no cantinho
        padding-left: 1.5rem;
      }

      &:last-child {
        border-top-right-radius: 8px;
        padding-right: 1.5rem;
      }
    }

    td {
      background-color: ${(props) => props.theme['gray-700']};
      border-top: 4px solid ${(props) => props.theme['gray-800']};
      padding: 1rem;
      font-size: 0.875rem;
      line-height: 1.6;

      &:first-child {
        width: 50%; //Para o primeiro td ocupar mais espaço que os outros
        padding-left: 1.5rem;
      }

      &:last-child {
        padding-right: 1.5rem;
      }
    }
  }
`
