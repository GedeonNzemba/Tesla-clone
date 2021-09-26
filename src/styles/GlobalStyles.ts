import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  *, input, button {
    font-family: 'Roboto', sans-serif;
  }
  @media (max-width: 599px) {
    .fXqnpG {
        margin-bottom: 3.5rem;
    }
    footer.sc-kEqYlL.YYPer {
      margin-bottom: 2rem;
    }
    footer.sc-kEqYlL.YYPer ul {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
}
}
`
