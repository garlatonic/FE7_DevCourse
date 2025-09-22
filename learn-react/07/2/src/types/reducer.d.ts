type CountState = number;
type CountAction = {
	type: "INCREMENT" | "DECREMENT" | "RESET";
};

type FormState = {
	email: string;
	pw: string;
};
type FormAction = {
	type: "SET_EMAIL" | "SET_PW";
	payload: string;
};
