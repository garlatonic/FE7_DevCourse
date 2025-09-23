import { createContext } from "react";

type CounterContextType = {
  count: number;
};
export const CounterContext = createContext<CounterContextType>({
  count: 0,
});

type CounterActionContextType = {
  increment: () => void;
  decrement: () => void;
  reset: () => void;
};
export const CounterActionContext = createContext<CounterActionContextType>({
  increment: () => {},
  decrement: () => {},
  reset: () => {},
});
