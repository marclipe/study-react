import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle` 
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* font-size: 16px; (Desktop) */
  html {
    @media (max-width: 1000px){
      font-size: 93.75%; //16 x 0,975 = 15 pixels
    }

    @media (max-width: 720px) {
      font-size: 87.5%; //16 x 0,875 = 14px
    }
  }

  body {
    background: ${(props) => props.theme.background};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);

    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content {
    width: 100%;
    max-width: 576px;
    background: ${(props) => props.theme.background};
    padding: 3rem;

    position: relative;
    border-radius: 0.24rem;
  }

  .react-modal-close {
    position: absolute;
    right: 1.5rem;
    top:  1.5rem;
    border: 0;
    background: transparent; //pois o button vem com borda

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;