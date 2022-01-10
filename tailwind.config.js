const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: [
		'./pages/*.{js,ts,jsx,tsx}',
		'./components/*.{js,ts,jsx,tsx}',
		'./pages/cart/payment/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {},
		theme: {
			screens: {
				xs: '300px',
				...defaultTheme.screens,
			},
		},
	},
	plugins: [require('@themesberg/flowbite/plugin')],
};
