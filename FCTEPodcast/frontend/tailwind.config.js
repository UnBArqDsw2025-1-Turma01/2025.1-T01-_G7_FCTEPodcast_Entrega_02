import { heroui } from '@heroui/react';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      keyframes: {
        'bounce-dot': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-0.4rem)' },
        },
      },
      animation: {
        'bounce-dot': 'bounce-dot 1s infinite',
      },
    },
    
  },
  darkMode: 'class',
  plugins: [heroui({
    "themes": {
      "light": {
        "colors": {
          "default": {
            "50": "#fafafa",
            "100": "#f2f2f3",
            "200": "#ebebec",
            "300": "#e3e3e6",
            "400": "#dcdcdf",
            "500": "#d4d4d8",
            "600": "#afafb2",
            "700": "#8a8a8c",
            "800": "#656567",
            "900": "#404041",
            "foreground": "#000",
            "DEFAULT": "#d4d4d8"
          },
          "primary": {
            "50": "#f2eafa",
            "100": "#dfcbf2",
            "200": "#ccadea",
            "300": "#b98fe2",
            "400": "#a671db",
            "500": "#9353d3",
            "600": "#7944ae",
            "700": "#603689",
            "800": "#462764",
            "900": "#2c193f",
            "foreground": "#fff",
            "DEFAULT": "#9353d3"
          },
          "secondary": {
            "50": "#eceeff",
            "100": "#d0d7ff",
            "200": "#b5c0ff",
            "300": "#9aa9ff",
            "400": "#7e91ff",
            "500": "#637aff",
            "600": "#5265d2",
            "700": "#404fa6",
            "800": "#2f3a79",
            "900": "#1e254d",
            "foreground": "#000",
            "DEFAULT": "#637aff"
          },
          "success": {
            "50": "#e4faf1",
            "100": "#bdf4dd",
            "200": "#97edc9",
            "300": "#70e6b5",
            "400": "#4ae0a1",
            "500": "#23d98d",
            "600": "#1db374",
            "700": "#178d5c",
            "800": "#116743",
            "900": "#0b412a",
            "foreground": "#000",
            "DEFAULT": "#23d98d"
          },
          "warning": {
            "50": "#fff8e6",
            "100": "#ffefc4",
            "200": "#ffe6a1",
            "300": "#ffdd7f",
            "400": "#ffd35c",
            "500": "#ffca3a",
            "600": "#d2a730",
            "700": "#a68326",
            "800": "#79601c",
            "900": "#4d3d11",
            "foreground": "#000",
            "DEFAULT": "#ffca3a"
          },
          "danger": {
            "50": "#ffeded",
            "100": "#ffd3d3",
            "200": "#ffb9b9",
            "300": "#ff9f9f",
            "400": "#ff8585",
            "500": "#ff6b6b",
            "600": "#d25858",
            "700": "#a64646",
            "800": "#793333",
            "900": "#4d2020",
            "foreground": "#000",
            "DEFAULT": "#ff6b6b"
          },
          "background": "#ffffff",
          "foreground": "#000000",
          "content1": {
            "DEFAULT": "#ffffff",
            "foreground": "#000"
          },
          "content2": {
            "DEFAULT": "#f4f4f5",
            "foreground": "#000"
          },
          "content3": {
            "DEFAULT": "#e4e4e7",
            "foreground": "#000"
          },
          "content4": {
            "DEFAULT": "#d4d4d8",
            "foreground": "#000"
          },
          "focus": "#006FEE",
          "overlay": "#000000"
        }
      },
      "dark": {
        "colors": {
          "default": {
            "50": "#0d0d0e",
            "100": "#19191c",
            "200": "#26262a",
            "300": "#323238",
            "400": "#3f3f46",
            "500": "#65656b",
            "600": "#8c8c90",
            "700": "#b2b2b5",
            "800": "#d9d9da",
            "900": "#ffffff",
            "foreground": "#fff",
            "DEFAULT": "#3f3f46"
          },
          "primary": {
            "50": "#2c193f",
            "100": "#462764",
            "200": "#603689",
            "300": "#7944ae",
            "400": "#9353d3",
            "500": "#a671db",
            "600": "#b98fe2",
            "700": "#ccadea",
            "800": "#dfcbf2",
            "900": "#f2eafa",
            "foreground": "#fff",
            "DEFAULT": "#9353d3"
          },
          "secondary": {
            "50": "#1e254d",
            "100": "#2f3a79",
            "200": "#404fa6",
            "300": "#5265d2",
            "400": "#637aff",
            "500": "#7e91ff",
            "600": "#9aa9ff",
            "700": "#b5c0ff",
            "800": "#d0d7ff",
            "900": "#eceeff",
            "foreground": "#000",
            "DEFAULT": "#637aff"
          },
          "success": {
            "50": "#0b412a",
            "100": "#116743",
            "200": "#178d5c",
            "300": "#1db374",
            "400": "#23d98d",
            "500": "#4ae0a1",
            "600": "#70e6b5",
            "700": "#97edc9",
            "800": "#bdf4dd",
            "900": "#e4faf1",
            "foreground": "#000",
            "DEFAULT": "#23d98d"
          },
          "warning": {
            "50": "#4d3d11",
            "100": "#79601c",
            "200": "#a68326",
            "300": "#d2a730",
            "400": "#ffca3a",
            "500": "#ffd35c",
            "600": "#ffdd7f",
            "700": "#ffe6a1",
            "800": "#ffefc4",
            "900": "#fff8e6",
            "foreground": "#000",
            "DEFAULT": "#ffca3a"
          },
          "danger": {
            "50": "#4d2020",
            "100": "#793333",
            "200": "#a64646",
            "300": "#d25858",
            "400": "#ff6b6b",
            "500": "#ff8585",
            "600": "#ff9f9f",
            "700": "#ffb9b9",
            "800": "#ffd3d3",
            "900": "#ffeded",
            "foreground": "#000",
            "DEFAULT": "#ff6b6b"
          },
          "background": "#000000",
          "foreground": "#ffffff",
          "content1": {
            "DEFAULT": "#18181b",
            "foreground": "#fff"
          },
          "content2": {
            "DEFAULT": "#27272a",
            "foreground": "#fff"
          },
          "content3": {
            "DEFAULT": "#3f3f46",
            "foreground": "#fff"
          },
          "content4": {
            "DEFAULT": "#52525b",
            "foreground": "#fff"
          },
          "focus": "#006FEE",
          "overlay": "#ffffff"
        }
      }
    },
    "layout": {
      "disabledOpacity": "0.5"
    }
  })],
}

