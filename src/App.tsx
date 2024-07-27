import ConverterContainer from "@app/components/converter/converterContainer";
import styled from "styled-components";

const AppContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: white;
`

function App() {
  return (
    <AppContainer>
      <ConverterContainer />
    </AppContainer>
  )
}

export default App;
