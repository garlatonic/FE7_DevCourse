export function reducer(state: CountState, action: CountAction) {
	switch (action.type) {
		case "INCREMENT":
			return state + 1;
		case "DECREMENT":
			return state - 1;
		case "RESET":
			return 0;
		default:
			return state;
	}
}
