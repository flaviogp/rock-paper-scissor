/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        scissorsGradientInitial: 'hsl(40, 84%, 53%)',
        scissorsGradientFinal: 'hsl(39, 89%, 49%)',
        paperGradientInitial: 'hsl(230, 89%, 62%)',
        paperGradientFinal: 'hsl(230, 89%, 65%)',
        rockGradientInitial: 'hsl(349, 71%, 52%)',
        rockGradientFinal: 'hsl(349, 70%, 56%)',
        lizardGradientInitial: 'hsl(261, 73%, 60%)',
        lizardGradientFinal: 'hsl(261, 72%, 63%)',
        cyanGradientInitial: 'hsl(189, 59%, 53%)',
        cyanGradientFinal: 'hsl(189, 58%, 57%)',
        darkText: 'hsl(229, 25%, 31%)',
        scoreText: 'hsl(229, 64%, 46%)',
        headerOutline: 'hsl(217, 16%, 45%)',
        radialGradientInitial: 'hsl(214, 47%, 23%)',
        radialGradientFinal: 'hsl(237, 49%, 15%)',
      },
      backgroundImage: {
        'bg-triangle': "url('./src/assets/images/bg-triangle.svg')"
      },
    },
  },
  plugins: [],
}

