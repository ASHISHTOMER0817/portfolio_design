/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
	extend: {
		animation: {
			"underline-grow": "underlineGrow 0.3s ease-in-out forwards",
			typing: "typing 2s steps(37) 1s forwards",
			blink: "blink 0.75s step-end infinite alternate",
		},
		keyframes: {
			underlineGrow: {
				"0%": { width: "0" },
				"100%": { width: "100%" },
			},
			typing: {
				from: { width: "0%" },
				to: { width: "100%" },
			},
			blink: {
				"50%": { borderColor: "transparent" },
			},
		},
	},
};
export const plugins = [];
