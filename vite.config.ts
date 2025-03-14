export default {
  build: {
    outDir: "dist", // Assure-toi que le build va dans le bon dossier
    rollupOptions: {
      input: "/index.html", // Vérifie que Vite pointe bien vers l'index
    },
  },
};
