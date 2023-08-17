import styled from "styled-components"

const SimpleButton = styled.button`
  background: blue;
  color: white;
  border: none;
`;

const LargeButton = styled(SimpleButton)`
  font-size: 50px;
`

const SmallButton = styled(LargeButton)`
color: bisque;
`
const PrimaryButton = styled.button`
  color: ${props => props.primary ? 'white' : 'gray'};
  background-color : ${props => props.primary ? 'blue' : 'gray'};
`


function App() {
  return (
    <>
      <SimpleButton>Simple</SimpleButton>
      <LargeButton>Large</LargeButton>
      <SmallButton>Small</SmallButton>
      <PrimaryButton>Normal</PrimaryButton>
      <PrimaryButton primary>Primary</PrimaryButton>
    </>
  )
}

export default App;
