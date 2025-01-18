/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        natoSans: ["Nato-Sans", "sans-serif"],
      },
      fontSize: {
        "title-sm": "32px",
        subtitle: "22px",
        body: "16px",
        "body-sm": "12px",
        "body-md": "14px",
        small: "12px",
        button: "16px",
      },
    },
  },
  plugins: [],
};
