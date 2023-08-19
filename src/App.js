import styled, {createGlobalStyle, css} from "styled-components"

const Sticky = css`
  position: fixed;
  background-color: wheat;
  transition: all 0.6s ease-in-out;
  padding: 1rem;
`

const Navigation = styled.nav`
  left: 0;
  top: 0;
  right: 0;
  z-index: 100;
  ${Sticky}
`

function App() {
  return (
    <>
      <Navigation>
        Sticky
      </Navigation>
    </>
  )
}


export default App;
