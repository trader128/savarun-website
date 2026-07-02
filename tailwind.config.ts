import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0A1628",
          50: "#E8EDF5",
          100: "#C5D0E3",
          200: "#8FA3C7",
          300: "#5A76AB",
          400: "#2E4F8F",
          500: "#0A1628",
          600: "#081220",
          700: "#060E18",
          800: "#040A10",
          900: "#020508",
        },
        royal: {
          DEFAULT: "#2563EB",
          50: "#EFF6FF",
          100: "#DBEAFE",
          200: "#BFDBFE",
          300: "#93C5FD",
          400: "#60A5FA",
          500: "#2563EB",
          600: "#1D4ED8",
          700: "#1E40AF",
          800: "#1E3A8A",
          900: "#172554",
        },
        purple: {
          accent: "#7C3AED",
          light: "#A78BFA",
        },
        cyan: {
          accent: "#0891B2",
          light: "#22D3EE",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-plus-jakarta)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "2xl": "16px",
        "3xl": "20px",
        "4xl": "24px",
      },
      animation: {
        "gradient-shift": "gradient-shift 8s ease infinite",
        "fade-in": "fade-in 0.6s ease-out forwards",
        "slide-up": "slide-up 0.6s ease-out forwards",
      },
      keyframes: {
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-gradient":
          "linear-gradient(135deg, rgba(37,99,235,0.08) 0%, rgba(124,58,237,0.06) 50%, rgba(8,145,178,0.04) 100%)",
        "hero-gradient-dark":
          "linear-gradient(135deg, rgba(37,99,235,0.15) 0%, rgba(124,58,237,0.12) 50%, rgba(8,145,178,0.08) 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
