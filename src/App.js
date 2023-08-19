import styled, {createGlobalStyle, css} from "styled-components"

export const ContentLayout = styled.div`
  display: block;
  height: 100%;
  max-width: 100%;
  margin-left : auto;
  margin-right: auto;
`

export const FeatureTitle = styled.div`
  font-family: AppleSystemUIFont,sans-serif;
  font-size: 58px;
  width: 90%;
`



function App() {
  return (
    <RayOut>
      <Title bold="600">
        Sticky
      </Title>
    </RayOut>
  )
}

const Title = styled(FeatureTitle)`
  background-color: aquamarine;
  font-weight: ${props => props.bold};
`
const RayOut =styled(ContentLayout)`
  background-color: yellow;
`

export default App;
