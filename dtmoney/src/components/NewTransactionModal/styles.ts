import { styled } from "styled-components";

export const ContainerNewTransactionModal = styled.form`
  h2 {
    color: ${(props) => props.theme["text-title"]};
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;

    background: ${(props) => props.theme["input-background"]};
    border: 1px solid #d7d7d7;

    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: ${(props) => props.theme["text-body"]};
    }

    //Todos input que tiver um input antes dele
    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background: ${(props) => props.theme.green};
    color: ${props => props.theme.white};
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    margin-top: 1.5rem;
    font-weight: 600;

    transition: filter 0.2s;

    //Diminui a luminosidade do botão
    &:hover {
      filter: brightness(0.9);
    }
  }
`;