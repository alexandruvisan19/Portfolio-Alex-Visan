import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/components/**/*.{ts,tsx}", "./src/*.{ts,tsx}", "./src/data/**/*.{ts,tsx}"],
	theme: {
		extend: {},
	},
	plugins: [typography],
	darkMode: "class",
};
