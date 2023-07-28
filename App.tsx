import { withExpoSnack } from "nativewind";
import { CalculatorProvider } from "./src/context/calculator";
import Views from "./src/views";


export default withExpoSnack(function () {
  return (
    <CalculatorProvider>
      <Views/>
    </CalculatorProvider>
  )
})