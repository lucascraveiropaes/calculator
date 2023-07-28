import { createContext, useReducer, useContext, ReactNode } from "react";
import reducer from "./reducer";

export interface CalculatorState {
  operation: string;
  display: string;
  history: string[];
}

export const initialState: CalculatorState = {
  operation: "",
  display: "0",
  history: [],
};

const CalculatorContext = createContext<{
  state: CalculatorState;
  dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => undefined,
});

export const CalculatorProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CalculatorContext.Provider value={{ state, dispatch }}>
      {children}
    </CalculatorContext.Provider>
  );
};


export function useCalculator() {
  return useContext(CalculatorContext);
}