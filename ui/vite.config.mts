/*import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig(() => {
  const base = process.env.GITHUB_REPOSITORY 
    ? `/${process.env.GITHUB_REPOSITORY.split('/')[1]}/`
    : '/';
    
  return {
    plugins: [react()],
    base :"https://github.com/AliBrn/AliBaran-Challenge",
    build: {
      outDir: "dist",
      assetsDir: "assets",
    },
  };
});
*/
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig(() => {
  // Bu kod, depo adını (AliBaran-Challenge) otomatik olarak bulur
  const base = process.env.GITHUB_REPOSITORY
    ? `/${process.env.GITHUB_REPOSITORY.split('/')[1]}/`
    : '/';

  return {
    plugins: [react()],
    base: base, // <-- DÜZELTME: Hatalı URL yerine, yukarıda hesaplanan 'base' değişkenini kullan
    build: {
      outDir: "dist",
      assetsDir: "assets",
    },
  };
});

