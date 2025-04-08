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
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  };
  
  module.exports = {
    darkMode: 'class', // <-- ini penting!
    // ... rest of config
  }
  