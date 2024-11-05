/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          
        "primary": "#111827",
        
        "secondary": "#374151",
                  
        "base-100": "#1f2937",
                  
                  },
        },
      ],
    },
  plugins: [
    require('daisyui'),
  ],
}

