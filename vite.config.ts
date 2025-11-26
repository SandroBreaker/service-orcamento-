import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // ATENÇÃO: Se for fazer deploy no GitHub Pages, altere a linha abaixo
  // para o nome do seu repositório. Ex: base: '/nome-do-repo/'
  // Se for na Vercel ou raiz de domínio, mantenha base: '/'
  base: '/', 
});