import styled, {createGlobalStyle, css} from "styled-components"

const RingVariant = (radius, stroke = 10) => css`
  position: absolute;
  border-radius: 50%;
  height: ${radius *2}px;
  width: ${radius * 2}px;
  border: ${stroke}px solid rgba(0,0,0,0.5);
`

const ShapeRing = styled.div`
  ${RingVariant(40,15)};
  top: 30%;
  left: 0;
  background-color: aquamarine;
`



function App() {
  return (
    <>
      <ShapeRing>
        Sticky
      </ShapeRing>
    </>
  )
}


export default App;
