/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Chakra Petch", "sans-serif"],
      },
      animation: {
        gradient: "gradient 3s linear infinite",
        "fade-in": "fadeIn 0.6s ease-out forwards",
      },
      keyframes: {
        gradient: {
          "0%, 100%": {
            "background-size": "200% auto",
            "background-position": "0% 50%",
          },
          "50%": {
            "background-size": "200% auto",
            "background-position": "100% 50%",
          },
        },
        fadeIn: {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
    },
  },
  plugins: [],
};
