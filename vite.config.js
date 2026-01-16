// vite.config.js
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
// If using React, add the React plugin as well
import react from '@vitejs/plugin-react'; 

export default defineConfig({
  plugins: [
    react(), // Uncomment if using React
    tailwindcss(),
  ],
});
