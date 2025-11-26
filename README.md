# ProService Elite - Landing Page Profissional

Esta é uma Landing Page moderna e de alta conversão para prestadores de serviços, desenvolvida com React, TypeScript e Tailwind CSS. Inclui um Chatbot para orçamentos, galeria de portfólio e seção de avaliações.

## 🛠️ Pré-requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:

*   [Node.js](https://nodejs.org/) (Versão 16 ou superior)
*   [Git](https://git-scm.com/)

---

## 🚀 Instalação e Execução Local

1.  **Clone ou baixe este repositório**
2.  **Instale as dependências:**
    Abra o terminal na pasta do projeto e execute:
    ```bash
    npm install
    ```
3.  **Rode o projeto:**
    ```bash
    npm run dev
    ```
    O navegador abrirá automaticamente em `http://localhost:5173`.

---

## 🌐 Guia de Deploy (Publicação Gratuita)

Abaixo estão duas opções para colocar seu site no ar gratuitamente.

### Opção 1: Vercel (Recomendado - Mais Fácil)

A Vercel é a melhor opção para projetos React, pois detecta as configurações automaticamente e não exige ajustes manuais.

1.  Crie uma conta na [Vercel](https://vercel.com/).
2.  Instale a CLI da Vercel (opcional) ou conecte sua conta do GitHub.
    *   **Via GitHub:**
        1.  Suba este código para um repositório no seu GitHub.
        2.  No painel da Vercel, clique em "Add New Project".
        3.  Selecione o repositório que você acabou de criar.
        4.  Clique em **Deploy**.
    *   **Pronto!** Seu site estará no ar em segundos com HTTPS.

---

### Opção 2: GitHub Pages

Para hospedar diretamente no GitHub, siga os passos abaixo:

#### 1. Preparar o Repositório
1.  Crie um novo repositório no GitHub (ex: `meu-site-servicos`).
2.  No seu terminal, inicialize o git e suba os arquivos:
    ```bash
    git init
    git add .
    git commit -m "Commit inicial"
    git branch -M main
    git remote add origin https://github.com/SEU_USUARIO/meu-site-servicos.git
    git push -u origin main
    ```

#### 2. Configurar o Vite
Abra o arquivo `vite.config.ts` e altere a propriedade `base` para o nome do seu repositório:

```typescript
// vite.config.ts
export default defineConfig({
  plugins: [react()],
  base: '/meu-site-servicos/', // <--- IMPORTANTE: Coloque o nome do seu repo aqui, entre barras
})
```

#### 3. Fazer o Deploy
Este projeto já está configurado com o pacote `gh-pages`. Basta rodar:

```bash
npm run deploy
```

Este comando irá automaticamente:
1.  Gerar a versão de produção do site.
2.  Publicar na branch `gh-pages` do seu repositório.

Após alguns minutos, seu site estará disponível em: `https://SEU_USUARIO.github.io/meu-site-servicos/`.

---

## 🔧 Scripts Disponíveis

*   `npm run dev`: Inicia servidor de desenvolvimento.
*   `npm run build`: Gera os arquivos otimizados para produção na pasta `dist`.
*   `npm run deploy`: Faz o build e publica no GitHub Pages.
