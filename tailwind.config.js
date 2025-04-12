/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['EB Garamond', 'Garamond', 'serif'],
			},
		},
	},
	plugins: [],
};
