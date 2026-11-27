# TrilhaBR

Aplicativo web para descobrir trilhas e percursos de corrida e marcar saídas em grupo.

Projeto da disciplina **Desenvolvimento de Software para Web 2** (DC - UFSCar, 02/2026).

## Fase atual: AA2 — (React)

Migração da interface inicial da AA1 para uma aplicação React com Vite, mantendo o design system original e adicionando interatividade com estado (`useState`), props e componentização.

| Arquivo / Componente | Descrição |
|---|---|
| `index.html` | Ponto de entrada HTML da SPA (carrega a fonte Manrope e a `<div id="root">`) |
| `src/main.jsx` | Inicialização do React e importação dos estilos globais |
| `src/App.jsx` | Componente principal: cabeçalho, hero com busca em tempo real, filtros dinâmicos, grade de trilhas, banner de saídas e rodapé |
| `src/TrailCard.jsx` | Componente reutilizável que renderiza cada card de trilha ou percurso a partir de `props` |
| `src/index.css` | Configuração do Tailwind CSS v4, Basecoat CSS e tokens de cores do TrilhaBR |

## Design e Stack

- **React + Vite**: interface componentizada com JSX, passagem de dados via `props`, renderização de listas com `.filter()` e `.map()`, e gerenciamento de estado local (`useState`) para os filtros e a barra de busca.
- **Basecoat CSS + Tailwind CSS v4**: mantivemos o [Basecoat](https://basecoatui.com) e as variáveis de tema (`--primary`, `--ring`, `--radius`, `--brasa-*`, `--floresta-*`, `--terra-*`) configuradas em `src/index.css`, preservando os estilos de botões (`.btn`), cards (`.card`), selos (`.badge`) e avatares (`.avatar`).
- **Paleta e Ícones**: verde floresta (primária), laranja brasa (chamadas para ação) e areia (fundo), com fonte Manrope e ícones via `lucide-react`.
- **Fotos reais**: fotos de trilhas brasileiras do Wikimedia Commons em WebP (`public/img/`), com duas versões (720px e 1600px) servidas via `srcset`. Autores e licenças estão em [`public/img/CREDITOS.md`](public/img/CREDITOS.md).

## Responsividade

O estilo base continua focado no celular, acrescentando adaptações progressivas com os prefixos do Tailwind (`sm:`, `md:`, `lg:`) via media queries de `min-width`.

| Tela | Prefixo (media query) | O que muda |
|---|---|---|
| Celular | sem prefixo (base) | Menu fixo no rodapé; hero com o texto embaixo; filtros rolam na horizontal; grade em 1 coluna |
| Tablet | `sm:` / `md:` (`min-width: 40rem` / `48rem`) | Menu sobe para o cabeçalho; degradê do hero passa a ser lateral; cards em 2 colunas |
| Desktop | `lg:` (`min-width: 64rem`, 1024px) | Hero mais alto; filtros quebram em linha; cards em 3 colunas; botão de criar saída no topo |

## Como rodar

1. Instale as dependências (baixa React, Vite, Tailwind CSS v4, Basecoat e Lucide):
   ```bash
   npm install
   ```
2. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
3.  Acesse o endereço exibido no terminal

## Equipe

- Pedro Vinicius (831601)
- Lucas Crempe (828519)
- Vinicius Yuya Massuda (834426)
