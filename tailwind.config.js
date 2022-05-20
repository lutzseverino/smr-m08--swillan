module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        gravitas: '"Gravitas\\ One", sans-serif',
        roboto: '"Roboto", sans-serif',
      },
      colors: {
        "dutch-white": "#E8DCB8",
        "columbia-blue": "#C3DDE8",
        "morning-blue": "#8A979C",
        rhythm: "#7D6B9C",
        "tropical-violet": "#C1ACE8",
      },
      boxShadow: {
        solid: "0.25rem 0.25rem #000",
      },
    },
  },
  plugins: [],
};
