import { styled } from "styled-components";

export const ContainerHeader = styled.header`
  background-color: ${props => props.theme.blue};
`

export const Content = styled.div`
  max-width: 70rem;
  margin: 0 auto;

  padding: 2rem 1rem 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    font-size: 1rem;
    color: #fff;
    background-color: ${(props) => props.theme["blue-light"]};
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;

    //Deixa a transição mais leve
    transition: filter 0.2s;

    //hack css button
    &:hover {
      filter: brightness(0.9);
    }
  }
`;