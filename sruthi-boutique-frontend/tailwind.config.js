/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#4f46e5",
        "primary-color-shade2": "#6366f1",
      },
    },
  },
  plugins: [],
};
