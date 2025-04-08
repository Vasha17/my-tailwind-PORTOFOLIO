/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./*.html'], // atau './src/**/*.{html,js}' tergantung struktur proyekmu
    theme: {
      extend: {},
    },
    plugins: [],
  };
  
  module.exports = {
    theme: {
      extend: {
        // ...
      },
    },
    plugins: [],
    corePlugins: {
      scrollBehavior: true,
    }
  }
  
  module.exports = {
    darkMode: 'class',
    // ...
  }
  