# Changelog - Branch `add-phantom`

## 🚀 Novas Funcionalidades (Features)

- **Seção de Projetos**: Adicionada nova aba acessível "Projetos" com uma interface em grade para exibição de portfólio.
- **Card Expansível**: Cards de projetos agora expandem suavemente para exibir detalhes completos, utilizando animações do `framer-motion`.
- **Projeto Phantom**: Adicionado o projeto "Phantom" com logo emoji animado (👻) e descrição detalhada.
- **Transições Fluídas**: Implementada troca suave (fade/slide) entre as visualizações de Perfil e Projetos.

## 🎨 UI/UX & Design

- **Navegação Premium**: Substituição das tabs padrão por um `NavSwitcher` personalizado estilo "pílula" com background elástico animado.
- **Layout Responsivo**:
    - **Mobile-First**: Visualização detalhada de projetos agora empilha verticalmente em telas menores para melhor legibilidade.
    - **Targets de Toque**: Padding de navegação otimizado para dispositivos móveis.
    - **Grade Inteligente**: Lista de projetos adapta-se automaticamente (coluna única em mobile, grade em desktop).

## 🛠 Refatoração & Correções (Fixes)

- **Fix de Scroll**: Removidos scrolls verticais indesejados refatorando o layout principal para usar `flex-col` e altura dinâmica (`flex-1`), garantindo que o rodapé fique fixo na base quando não há overflow.
- **Transição de Componente**: Refatoração completa de `page.tsx` para usar `ClientPage` e gerenciamento de estado client-side, permitindo navegação instantânea.
- **Estabilidade de Layout**: Corrigido redimensionamento do container principal para evitar saltos de layout durante a troca de abas.
