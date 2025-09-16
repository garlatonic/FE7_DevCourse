import { style } from "@vanilla-extract/css";

export const button = style({
	background: "red",
	color: "white",
	padding: "8px 16px",
	borderRadius: "6px",
	":hover": {
		background: "darkred",
	},
});
