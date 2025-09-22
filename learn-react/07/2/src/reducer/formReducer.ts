export default function formReducer(state: FormState, action: FormAction) {
	switch (action.type) {
		case "SET_EMAIL":
			return { ...state, email: action.payload };
		case "SET_PW":
			return { ...state, pw: action.payload };
		default:
			return state;
	}
}
