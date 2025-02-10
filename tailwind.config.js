const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        "2xl": "calc(var(--radius) + 4px)",
        xl: "calc(var(--radius) + 2px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card) / 0.2)",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground) / 0.6)",
        },
        accent: {
          DEFAULT: "hsl(var(--accent) / 0.15)",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border) / 0.1)",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
        color1: "#394d9b",
        color2: "#7dd1e7",
        color3: "#ffc857",
        color4: "#f4f4f4",
        color5: "#0f1638",
        color6: "#a8d897",
        brand: {
          DEFAULT: "hsl(var(--brand))",
          foreground: "hsl(var(--brand-foreground))",
        },
      },
      fontFamily: {
        lexend: ["Lexend Deca", "serif"],
        poppins: ["Poppins", "serif"],
        quicksand: ["Quicksand", "serif"],
        code: ["var(--font-mono)"],
        regular: ["var(--font-body)"],
      },
      animation: {
        aurora: "aurora 60s linear infinite",
        gradient: "gradient 8s linear infinite",
        first: "moveVertical 30s ease infinite",
        second: "moveInCircle 20s reverse infinite",
        third: "moveInCircle 40s linear infinite",
        fourth: "moveHorizontal 40s ease infinite",
        fifth: "moveInCircle 20s ease infinite",
      },
      keyframes: {
        moveHorizontal: {
          "0%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
          "50%": {
            transform: "translateX(50%) translateY(10%)",
          },
          "100%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
        },
        moveInCircle: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "50%": {
            transform: "rotate(180deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        moveVertical: {
          "0%": {
            transform: "translateY(-50%)",
          },
          "50%": {
            transform: "translateY(50%)",
          },
          "100%": {
            transform: "translateY(-50%)",
          },
        },
        shine: {
          "0%": {
            "background-position": "0% 0%",
          },
          "50%": {
            "background-position": "100% 100%",
          },
          to: {
            "background-position": "0% 0%",
          },
        },
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        marquee: {
          from: {
            transform: "translateX(0)",
          },
          to: {
            transform: "translateX(calc(-100% - var(--gap)))",
          },
        },
        appear: {
          "0%": {
            opacity: "0",
            transform: "translateY(1rem)",
            filter: "blur(.5rem)",
          },
          "50%": {
            filter: "blur(0)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
            filter: "blur(0)",
          },
        },
        "appear-zoom": {
          "0%": {
            opacity: "0",
            transform: "scale(.5)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
        "pulse-hover": {
          "0%": {
            opacity: "1",
            transform: "translateY(0)",
          },
          "50%": {
            opacity: "0.5",
            transform: "translateY(-1rem)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        hover: {
          "0%": {
            transform: "translateY(0) translateX(0)",
          },
          "50%": {
            transform: "translateY(-1rem) translateX(1rem)",
          },
          "100%": {
            transform: "translateY(0) translateX(0)",
          },
        },
        "hover-reverse": {
          "0%": {
            transform: "translateY(0) translateX(0)",
          },
          "50%": {
            transform: "translateY(1rem) translateX(1rem)",
          },
          "100%": {
            transform: "translateY(0) translateX(0)",
          },
        },
        "pulse-fade": {
          "0%": {
            opacity: "1",
          },
          "50%": {
            opacity: "0.3",
          },
          "100%": {
            opacity: "1",
          },
        },
        gradient: {
          to: {
            backgroundPosition: "var(--bg-size) 0",
          },
        },
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
      },
      spacing: {
        container: "1280px",
      },
      boxShadow: {
        "glow-sm": "0 0 16px 0 hsla(var(--foreground) / 0.08) inset",
        "glow-md": "0 0 32px 0 hsla(var(--foreground) / 0.08) inset",
        "glow-lg": "0 0 64px 0 hsla(var(--foreground) / 0.06) inset",
      },
      screens: {
        xs: "320px",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), addVariablesForColors],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
