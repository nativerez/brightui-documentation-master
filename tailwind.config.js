const config = require('@brighthr/tailwind-config');

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "../docs/**/*.mdx", './node_modules/@brighthr/*/dist/**/*.js'], // my markdown stuff is in ../docs, not /src
  darkMode: ["class", '[data-theme="dark"]'], // hooks into docusaurus' dark mode settigns
  theme: {
    extend: {...config,
      typography: {
      DEFAULT: {
        css: {
          color: '#0A2233',
          a: {
            color: '#0057AD',
            '&:hover': {
              color: '#0070E0',
            },
          },
          h4: {
            fontWeight: '700',
          },
          h5: {
            fontWeight: '600',
          }
        },
      },
    },},
    fontFamily: {
      sans: ['Albert Sans'],
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
