import styled, {css} from "styled-components"
import {useState} from "react";

const Wrap = styled.div`
  background: ${({active}) => {
    if (active) {
      return "white";
    }
    return "#eee";
  }};
  color: black;
`
const Button = styled.button`
  width: 200px;
  padding: 30px;
`
// 상속
const NewButton = styled(Button)`
  color: ${props => props.color || "red"};
`

function App() {
  const [email, setEmail] = useState("");

  return (
    <Wrap active={email.length}>
      <Button>Hello</Button>
      <NewButton color={"blue"}>New Button</NewButton>
    </Wrap>
  )
}

const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FlexBox = styled.div`
  ${flexCenter}
`;

console.log(FlexBox)



export default App;
