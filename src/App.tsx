import ConverterContainer from "@app/components/converter/converterContainer";
import { Suspense, } from "react";
import useCurrencyStore from "./stores/currencyStore";

function App() {
  return (
    <>
      <ConverterContainer />
    </>
  )
}

export default App;
