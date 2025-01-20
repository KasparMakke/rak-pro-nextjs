import { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}", // Ensure Tailwind scans your TypeScript files
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "#e2e8f0", // Define a custom 'border' color
      },
    },
  },
  plugins: [],
};

export default config;
