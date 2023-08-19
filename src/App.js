import styled, {createGlobalStyle, ThemeProvider} from "styled-components";
import {theme} from "./theme";


const GlobalStyle = createGlobalStyle`
  body{
    margin: 0px;
    padding: 0px;
  }
`;

const Container = styled.div`
  height: 100%;
  width: 100vh;
`
const Button = styled.button`
  border-radius: 30px;
  padding: 25px 15px;
  background-color: ${props => props.theme.Soft_Pink};
`

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <GlobalStyle />
        <Button>Hello</Button>
      </Container>
    </ThemeProvider>
  )
}



export default App;
