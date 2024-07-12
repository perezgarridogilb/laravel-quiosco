/** @type {import('tailwindcss').Config} */
export default {
  content: [
    /** escanear archivos para determinar qué clases de css se están utilizando, para únicamente añadir esos archivos a esas clases finales de css para no agregar las 18k lineas */
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

