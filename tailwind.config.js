const plugin = require("tailwindcss/plugin");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        black: {
          5: "#F5F5F5",
          60: "#858585",
          80: "#5C5C5C",
          100: "#333333",
        },
        blue: {
          100: "#008FFF",
        },
        gray: {
          100: "#EBEBEB",
        },
        red: {
          100: "#DB0038",
          10: "#FBE6EB",
        },
        tosca: {
          100: "#53BAC1",
        },
        yellow: {
          100: "#F7C200",
        },
      },
      flex: {
        2: "2, 2, 0%",
        3: "3, 3, 0%",
      },
      fontFamily: {
        primary: ["Quicksand", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        svg: {
          color: "#5C5C5C",
        },
        ".navItem:hover svg, .navItem:hover p": {
          color: "#008FFF",
          transition: "0.5s"
        },
        ".border-story": {
          display: "flex",
          "justify-content": "center",
          "background-image": "linear-gradient(to right, #00c6fb, #005bea)",
          "border-radius": "50%",
          height: "60px",
          width: "60px",
        },
        ".wrapper": {
          "box-shadow": "0px 4px 16px rgba(0, 0, 0, 0.1)",
          "border-radius": "24px",
        },
        ".topscore": {
          background: 'url("/images/peringkat/confetty.png") repeat-x left top',
        },
        "topscore::-webkit-scrollbar": {
          display: "none",
        },
        ".rank1": {
          background:
            "linear-gradient(89.9deg, #FFCE00 42.44%, #FFEEA9 107.27%);",
        },
        ".rank2": {
          background:
            "linear-gradient(89.9deg, #D1D1C2 42.44%, #EFEFEF 107.27%);",
        },
        ".rank3": {
          background:
            "linear-gradient(89.9deg, #EBA468 42.44%, #FDDDC2 107.27%);",
        },
        ".rank": {
          background: "#F9F9F9;",
        },
        ".line-through": {
          "text-decoration-color": "#858585",
        },
        ".scroll::-webkit-scrollbar": {
          width: "0;",
          height: "0;",
          background: "transparent;",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    }),
  ],
};
