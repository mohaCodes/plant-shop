/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./index.html",
		"./index.css",
		"./src/**/*.{js,jsx}",
		"./src/*.{js,jsx}",
	],
	theme: {
		extend: {
			// adding a smaller screen size
			screens: {
				xs: "310px",
			},

			// adding additional colors
			colors: {
				"salmon-pink": "#FEE6D0",
			},

			// adding additional fonts
			fontFamily: {
				raleway: "'Raleway', sans-serif",
			},
		},
	},
	plugins: [],
}
