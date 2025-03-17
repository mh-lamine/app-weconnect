/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors:{
        primary:"#b361d4",
        destructive: "#8A3045",
        success: "#308A3E",
        dark: "#250F2C",
        light: "#E9E7EA",
        muted: "#928795",
      },
    },
  },
  plugins: [],
}