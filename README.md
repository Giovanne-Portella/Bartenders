# 🍸 Bartender's Choice

> Encontre os melhores bartenders da região metropolitana de Porto Alegre.

**Bartender's Choice** é uma plataforma moderna que conecta pessoas a bartenders qualificados para eventos, festas e ocasiões especiais. Navegue por perfis detalhados, filtre por localidade e especialidade, e entre em contato diretamente via WhatsApp.

---

## ✨ Funcionalidades

- **Busca inteligente** — Filtre bartenders por nome, localidade e especialidade em tempo real
- **Perfis detalhados** — Avaliações, experiência, disponibilidade e descrição de cada profissional
- **Contato direto** — Ligue ou envie mensagem pelo WhatsApp com um clique
- **Design responsivo** — Interface adaptada para desktop, tablet e mobile
- **Animações modernas** — Transições suaves com Framer Motion
- **Tema escuro premium** — Visual elegante com gradientes e glassmorphism
- **Modais informativos** — Seções "Sobre Nós" e "Contato" em modais animados

---

## 🛠️ Tecnologias

| Tecnologia | Finalidade |
|---|---|
| [React 19](https://react.dev/) | Biblioteca de interface |
| [TypeScript](https://www.typescriptlang.org/) | Tipagem estática |
| [Vite](https://vite.dev/) | Build tool & dev server |
| [Tailwind CSS v4](https://tailwindcss.com/) | Estilização utility-first |
| [Framer Motion](https://www.framer.com/motion/) | Animações e transições |
| [Lucide React](https://lucide.dev/) | Ícones modernos |

---

## 📁 Estrutura do Projeto

```
bartenders/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── AboutModal.tsx        # Modal "Sobre Nós"
│   │   ├── BartenderCard.tsx     # Card individual do bartender
│   │   ├── BartenderList.tsx     # Listagem com filtros
│   │   ├── ContactModal.tsx      # Modal de contato
│   │   ├── Footer.tsx            # Rodapé
│   │   ├── Header.tsx            # Navegação fixa
│   │   ├── Hero.tsx              # Seção hero principal
│   │   └── SearchFilters.tsx     # Barra de filtros
│   ├── data/
│   │   └── bartenders.ts         # Dados dos bartenders
│   ├── hooks/
│   │   └── useBartenders.ts      # Hook de busca e filtragem
│   ├── types/
│   │   └── index.ts              # Interfaces TypeScript
│   ├── App.tsx                   # Componente raiz
│   ├── index.css                 # Estilos globais + Tailwind
│   └── main.tsx                  # Ponto de entrada
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
└── eslint.config.js
```

---

## 🚀 Como Executar

### Pré-requisitos

- [Node.js](https://nodejs.org/) v18 ou superior
- npm (incluído com Node.js)

### Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/bartenders-choice.git
cd bartenders-choice

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

O app estará disponível em `http://localhost:5173`.

### Scripts Disponíveis

| Comando | Descrição |
|---|---|
| `npm run dev` | Inicia o servidor de desenvolvimento |
| `npm run build` | Gera o build de produção em `dist/` |
| `npm run preview` | Pré-visualiza o build de produção |
| `npm run lint` | Executa o ESLint no projeto |

---

## 🌐 Regiões Atendidas

- Porto Alegre
- Canoas
- São Leopoldo
- Novo Hamburgo
- Esteio
- Nova Santa Rita

---

## 🍹 Especialidades

- Coquetéis Clássicos
- Coquetéis Tropicais
- Mixologia Molecular
- Coquetelaria Autoral
- Coquetelaria Clássica

---

## 📱 Responsividade

A interface é totalmente responsiva com breakpoints otimizados:

- **Mobile** (< 640px) — Layout em coluna, menu hamburger
- **Tablet** (640px – 1024px) — Grid adaptado
- **Desktop** (> 1024px) — Layout completo com navegação horizontal

---

## 🗄️ Integração com Banco de Dados (Opcional)

O projeto está preparado para integração com **Supabase** caso seja necessário persistir dados, autenticar bartenders ou gerenciar avaliações. Para isso:

1. Crie um projeto no [Supabase](https://supabase.com/)
2. Instale o client: `npm install @supabase/supabase-js`
3. Configure as variáveis de ambiente:

```env
VITE_SUPABASE_URL=https://seu-projeto.supabase.co
VITE_SUPABASE_ANON_KEY=sua-chave-anon
```

4. Substitua os dados estáticos em `src/data/bartenders.ts` por chamadas ao Supabase

---

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature: `git checkout -b feature/nova-funcionalidade`
3. Commit suas alterações: `git commit -m 'feat: adiciona nova funcionalidade'`
4. Push para a branch: `git push origin feature/nova-funcionalidade`
5. Abra um Pull Request

---

## 📄 Licença

Este projeto é de uso livre para fins educacionais e comerciais.

---

<p align="center">
  Feito com ☕ e 🍸 em Porto Alegre, RS
</p>
