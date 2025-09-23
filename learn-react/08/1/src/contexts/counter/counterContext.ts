import { createContext } from "react";

type CounterContextType = {
	count: number;
	increment: () => void;
	decrement: () => void;
	reset: () => void;
};

export const CounterContext = createContext<CounterContextType>({
	count: 0,
	increment: () => {},
	decrement: () => {},
	reset: () => {},
});
