/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      red: {
        100: "#feeaee",
        200: "#fee0e6",
        300: "#fcbfcb",
        400: "#f63156",
        500: "#dd2c4d",
        600: "#c52745",
        700: "#b92541",
        800: "#941d34",
        900: "#6f1627",
      },
      blue: {
        100: "#eaf2fe",
        200: "#e0ecfd",
        300: "#bfd8fb",
        400: "#3180f2",
        500: "#2c73da",
        600: "#2766c2",
        700: "#2560B6",
        800: "#1D4D91",
        900: "#163A6D",
      },
      purple: {
        100: "#f0edfe",
        200: "#e9e4fe",
        300: "#d1c7fc",
        400: "#6b49f5",
        500: "#6042dd",
        600: "#563ac4",
        700: "#5037b8",
        800: "#402c93",
        900: "#30216e",
      },
      gray: {
        100: "#f9f9f9",
        200: "#f6f6f6",
        300: "#ececec",
        400: "#c1c1c1",
        500: "#aeaeae",
        600: "#9a9a9a",
        700: "#919191",
        800: "#747474",
        900: "#575757",
      },
      white: "#ffffff",
      black: "#000000",
    },
    fontFamily: {
      body: ["Noto Sans KR"],
    },
    fontSize: {
      h1: [
        "26px",
        { lineHeight: "1.5", letterSpacing: "-0.5px", fontWeight: "500" },
      ],
      h2: [
        "24px",
        { lineHeight: "1.5", letterSpacing: "-0.5px", fontWeight: "500" },
      ],
      h3: [
        "20px",
        { lineHeight: "1.5", letterSpacing: "-0.5px", fontWeight: "500" },
      ],
      h4: [
        "18px",
        { lineHeight: "1.5", letterSpacing: "-0.5px", fontWeight: "500" },
      ],
      "body1-400": [
        "16px",
        { lineHeight: "1.45", letterSpacing: "-0.5px", fontWeight: "400" },
      ],
      "body1-500": [
        "16px",
        { lineHeight: "1.45", letterSpacing: "-0.5px", fontWeight: "500" },
      ],
      "body1-700": [
        "16px",
        { lineHeight: "1.45", letterSpacing: "-0.5px", fontWeight: "700" },
      ],
      "body2-400": [
        "14px",
        { lineHeight: "1.45", letterSpacing: "-0.25px", fontWeight: "400" },
      ],
      "body2-500": [
        "14px",
        { lineHeight: "1.45", letterSpacing: "-0.25px", fontWeight: "500" },
      ],
      "body2-700": [
        "14px",
        { lineHeight: "1.45", letterSpacing: "-0.25px", fontWeight: "700" },
      ],
      "body3-400": [
        "13px",
        { lineHeight: "1.45", letterSpacing: "-0.25px", fontWeight: "400" },
      ],
      "body3-500": [
        "13px",
        { lineHeight: "1.45", letterSpacing: "-0.25px", fontWeight: "500" },
      ],
      "body3-700": [
        "13px",
        { lineHeight: "1.45", letterSpacing: "-0.25px", fontWeight: "700" },
      ],
      "body4-400": [
        "12px",
        { lineHeight: "1.4", letterSpacing: "-0.25px", fontWeight: "400" },
      ],
      "body4-500": [
        "12px",
        { lineHeight: "1.4", letterSpacing: "-0.25px", fontWeight: "500" },
      ],
      "body4-700": [
        "12px",
        { lineHeight: "1.4", letterSpacing: "-0.25px", fontWeight: "700" },
      ],
      "body5-400": [
        "10px",
        { lineHeight: "1.35", letterSpacing: "-0.25px", fontWeight: "400" },
      ],
      "body5-500": [
        "10px",
        { lineHeight: "1.35", letterSpacing: "-0.25px", fontWeight: "500" },
      ],
      "body5-700": [
        "10px",
        { lineHeight: "1.35", letterSpacing: "-0.25px", fontWeight: "700" },
      ],
      caption1: [
        "13px",
        { lineHeight: "1.45", letterSpacing: "0", fontWeight: "300" },
      ],
      caption2: [
        "12px",
        { lineHeight: "1.4", letterSpacing: "0", fontWeight: "300" },
      ],
    },
  },
  plugins: [],
};
