import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/components/**/*.{ts,tsx}", "./src/*.{ts,tsx}"],
	theme: {
		extend: {},
	},
	plugins: [typography],
};
