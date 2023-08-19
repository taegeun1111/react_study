import styled, {createGlobalStyle, css} from "styled-components"
import {useState} from "react";

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: antiquewhite
  }
`;

function App() {
  const [email, setEmail] = useState("");

  return (
    <GlobalStyle>
      Components...
    </GlobalStyle>
  )
}




export default App;
