module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Helvetica Neue",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Oxygen",
          "Ubuntu",
          "Cantarell",
          "Open Sans",
          "sans-serif",
        ],
      },
      colors: {
        // !! Defaults = 600
        primary: {
          // !! Flinks Blue
          DEFAULT: "#00ACE4",
          100: "#EAFAFF",
          200: "#DCF5FD",
          300: "#93E4F3",
          400: "#60D5FB",
          500: "#30BFEE",
          600: "#00ACE4",
          700: "#008fbe",
          800: "#007398",
          900: "#005672",
          1000: "#00394C",
          1100: "#001D26",
        },
        // !! Flinks Night Blue
        secondary: {
          DEFAULT: "#1b1b3c",
          100: "#d9d9de",
          200: "#b3b3be",
          300: "#8d8d9e",
          400: "#67677d",
          500: "#41415d",
          600: "#1b1b3c",
          700: "#171732",
          800: "#121228",
          900: "#0E0E1E",
          1000: "#090914",
          1100: "#05050a",
        },
        accent: {
          DEFAULT: "#10b981",
          light: "#6ee7b7",
          dark: "#047857",
        },
        grey: {
          DEFAULT: "#797979",
          100: "#F7F8F9",
          200: "#F0F1F3",
          300: "#E3E4E6",
          400: "#CACBCD",
          500: "#A7A9AB",
          600: "#797979",
          700: "#5E5E5E",
          800: "#4E4E4E",
          900: "#3F3F3F",
          1000: "#2F2F2F",
          1100: "#1F1F1F",
        },
        blue: {
          DEFAULT: "#0073e4",
          100: "#F0F8FF",
          200: "#aad0f6",
          300: "#80b9f2",
          400: "#55a2ed",
          500: "#2B8AE9",
          600: "#0073e4",
          700: "#0060be",
          800: "#004d98",
          900: "#003a72",
          1000: "#00264c",
          1100: "#001326",
        },
        mint: {
          DEFAULT: "#4DE7E4",
          100: "#e1fbfb",
          200: "#c4f7f6",
          300: "#a6f3f2",
          400: "#88efed",
          500: "#6bebe9",
          600: "#4DE7E4",
          700: "#40c1be",
          800: "#339a98",
          900: "#277472",
          1000: "#1a4d4c",
          1100: "#0d2726",
        },
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: true,
  },
};
