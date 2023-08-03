import { styled } from "styled-components";

export const ContainerSummary = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -10rem;

  div {
    background-color: ${(props) => props.theme.shape};
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: ${(props) => props.theme["text-title"]};

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;
    }

    &.highlight-background {
      background-color: ${(props) => props.theme.green};
      color: ${(props) => props.theme.white};
    }
  }
`;