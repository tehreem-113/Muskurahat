/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Muskaan brand palette — use these exact tokens everywhere, never raw hex in components
        cream: '#FFFDF6',      // Primary background & light surfaces
        lilac: '#E2D4E0',      // Soft accent / highlights
        slate: '#949AB1',      // Secondary / muted elements
        dusty: '#7C7E9D',      // Primary UI / main brand color
        navy: '#4C5372',       // Deep text & contrast elements
      },
      fontFamily: {
        display: ['"Fredoka"', 'sans-serif'],   // rounded, friendly headline face
        body: ['"Inter"', 'sans-serif'],         // clean English body copy
        urdu: ['"Noto Nastaliq Urdu"', 'serif'], // Urdu script rendering
      },
      borderRadius: {
        blob: '42% 58% 65% 35% / 45% 40% 60% 55%',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        sparkle: {
          '0%, 100%': { opacity: 0.3, transform: 'scale(0.9)' },
          '50%': { opacity: 1, transform: 'scale(1.1)' },
        },
        growSmile: {
          '0%': { strokeDashoffset: 300 },
          '100%': { strokeDashoffset: 0 },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        sparkle: 'sparkle 2.4s ease-in-out infinite',
        growSmile: 'growSmile 2s ease-out forwards',
      },
    },
  },
  plugins: [],
}
