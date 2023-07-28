import { initialState, CalculatorState } from "./calculator";
import { OPERATIONS, ACTIONS } from "components/keyboard";

export default function reducer(state: CalculatorState, action: any): CalculatorState {
  const isDot = action.payload === ".";
  const hasDot = state.display.includes(".");

  const raw = (isDot && hasDot) ? state.display : state.display + handleOperators(action.payload);
  const value = String(parseFloat(raw));

  console.log(raw, value);

  switch (action.type) {
    case "value":
      return {
        ...state,
        display: isDot ? raw : value,
      };

    case OPERATIONS.DIVIDE:
    case OPERATIONS.MULTIPLY:
    case OPERATIONS.MINUS:
    case OPERATIONS.SUM:
      return {
        ...state,
        display: "0",
        operation: raw,
      };

    case ACTIONS.EQUAL:
      const operation = state.operation + state.display;
      const result = eval(operation);

      console.log(operation);

      return {
        ...state,
        display: String(result || ""),
        operation: "",
        history: [
          ...state.history,
          `${operation} = ${result}`,
        ],
      };

    case ACTIONS.CLEAR:
      return {
        ...state,
        display: "0",
        operation: "",
      };
    default:
      return state;
  }
}


function handleOperators(value: string) {
  if (value === OPERATIONS.MULTIPLY)
    return "*";
  
  if (value === OPERATIONS.DIVIDE)
    return "/";

  return value;
}