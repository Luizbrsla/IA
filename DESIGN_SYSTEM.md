# Design System - Emprego+

## Visão Geral

O Design System da plataforma Emprego+ foi criado com foco na experiência do usuário, acessibilidade e consistência visual. Baseado nos princípios de design "calmo", utiliza uma paleta de cores suaves, espaçamentos generosos e microinterações sutis para criar uma experiência agradável e profissional.

## Princípios de Design

### 1. Estética Calma
- Uso de cores suaves e tons pastel
- Espaçamentos generosos entre elementos
- Tipografia legível e hierarquia clara
- Microinterações sutis e não intrusivas

### 2. Acessibilidade Universal
- Conformidade com diretrizes WCAG AA
- Contraste adequado entre cores (mínimo 4.5:1)
- Suporte completo à navegação por teclado
- Textos alternativos para todos os elementos visuais

### 3. Mobile-First
- Design responsivo que funciona em todos os dispositivos
- Touch targets de pelo menos 44px
- Navegação otimizada para dispositivos móveis
- Performance otimizada para conexões lentas

### 4. Consistência
- Componentes reutilizáveis e padronizados
- Nomenclatura consistente em todo o sistema
- Comportamentos previsíveis e familiares

## Paleta de Cores

### Cores Primárias

#### Primary (Azul)
- **50**: #f0f9ff - Backgrounds sutis
- **100**: #e0f2fe - Hover states leves
- **200**: #bae6fd - Borders e divisores
- **300**: #7dd3fc - Elementos secundários
- **400**: #38bdf8 - Elementos interativos
- **500**: #0ea5e9 - Cor principal da marca
- **600**: #0284c7 - Botões e links
- **700**: #0369a1 - Estados ativos
- **800**: #075985 - Textos importantes
- **900**: #0c4a6e - Textos de alta hierarquia

#### Secondary (Verde Água)
- **50**: #f0fdfa
- **100**: #ccfbf1
- **200**: #99f6e4
- **300**: #5eead4
- **400**: #2dd4bf
- **500**: #14b8a6 - Cor secundária da marca
- **600**: #0d9488
- **700**: #0f766e
- **800**: #115e59
- **900**: #134e4a

### Cores Neutras

#### Neutral (Cinzas)
- **50**: #f8fafc - Background principal
- **100**: #f1f5f9 - Backgrounds de cards
- **200**: #e2e8f0 - Borders e divisores
- **300**: #cbd5e1 - Borders ativos
- **400**: #94a3b8 - Textos secundários
- **500**: #64748b - Textos padrão
- **600**: #475569 - Textos importantes
- **700**: #334155 - Títulos
- **800**: #1e293b - Títulos principais
- **900**: #0f172a - Textos de máxima hierarquia

### Cores Semânticas

#### Success (Verde)
- **50**: #f0fdf4
- **100**: #dcfce7
- **500**: #22c55e - Cor principal
- **600**: #16a34a - Estados ativos

#### Warning (Amarelo)
- **50**: #fffbeb
- **100**: #fef3c7
- **500**: #f59e0b - Cor principal
- **600**: #d97706 - Estados ativos

#### Error (Vermelho)
- **50**: #fef2f2
- **100**: #fee2e2
- **500**: #ef4444 - Cor principal
- **600**: #dc2626 - Estados ativos

## Tipografia

### Fonte Principal
**Inter** - Fonte sans-serif moderna e legível, otimizada para interfaces digitais.

### Hierarquia Tipográfica

#### Títulos
- **6xl**: 3.75rem (60px) - Títulos de hero sections
- **5xl**: 3rem (48px) - Títulos principais de página
- **4xl**: 2.25rem (36px) - Títulos de seção
- **3xl**: 1.875rem (30px) - Subtítulos importantes
- **2xl**: 1.5rem (24px) - Títulos de cards
- **xl**: 1.25rem (20px) - Subtítulos de cards
- **lg**: 1.125rem (18px) - Textos destacados

#### Corpo de Texto
- **base**: 1rem (16px) - Texto padrão
- **sm**: 0.875rem (14px) - Textos secundários
- **xs**: 0.75rem (12px) - Labels e metadados

### Pesos de Fonte
- **400 (Regular)**: Texto padrão
- **500 (Medium)**: Textos destacados
- **600 (Semibold)**: Subtítulos
- **700 (Bold)**: Títulos

## Espaçamentos

### Sistema de Grid
Base de 4px para todos os espaçamentos, garantindo consistência e alinhamento perfeito.

#### Escala de Espaçamentos
- **1**: 0.25rem (4px)
- **2**: 0.5rem (8px)
- **3**: 0.75rem (12px)
- **4**: 1rem (16px)
- **5**: 1.25rem (20px)
- **6**: 1.5rem (24px)
- **8**: 2rem (32px)
- **10**: 2.5rem (40px)
- **12**: 3rem (48px)
- **16**: 4rem (64px)
- **20**: 5rem (80px)
- **24**: 6rem (96px)

### Aplicação de Espaçamentos
- **Padding interno de componentes**: 16px (4) ou 24px (6)
- **Margin entre elementos**: 16px (4) ou 24px (6)
- **Espaçamento entre seções**: 48px (12) ou 64px (16)
- **Espaçamento de página**: 80px (20) ou 96px (24)

## Componentes

### Button

#### Variantes
- **Primary**: Ações principais (CTA)
- **Secondary**: Ações secundárias
- **Outline**: Ações alternativas
- **Ghost**: Ações sutis
- **Danger**: Ações destrutivas

#### Tamanhos
- **sm**: 32px altura, 12px padding horizontal
- **md**: 40px altura, 16px padding horizontal
- **lg**: 48px altura, 24px padding horizontal
- **xl**: 56px altura, 32px padding horizontal

#### Estados
- **Default**: Estado padrão
- **Hover**: Elevação sutil e mudança de cor
- **Active**: Cor mais escura
- **Disabled**: Opacidade 50%, cursor not-allowed
- **Loading**: Spinner animado

### Input

#### Variantes
- **Default**: Campo padrão
- **Error**: Campo com erro (borda vermelha)
- **Success**: Campo válido (borda verde)

#### Elementos
- **Label**: Sempre presente, posicionado acima
- **Placeholder**: Texto de ajuda dentro do campo
- **Helper Text**: Texto explicativo abaixo
- **Error Message**: Mensagem de erro em vermelho
- **Icons**: Ícones à esquerda ou direita

### Card

#### Variantes
- **Default**: Card básico com borda
- **Elevated**: Card com sombra
- **Outlined**: Card com borda destacada

#### Elementos
- **Header**: Título e ações
- **Body**: Conteúdo principal
- **Footer**: Ações secundárias

### Badge

#### Variantes
- **Primary**: Informações importantes
- **Secondary**: Informações complementares
- **Success**: Status positivo
- **Warning**: Alertas
- **Error**: Erros ou status negativos
- **Neutral**: Informações neutras

#### Tamanhos
- **sm**: 20px altura, texto 12px
- **md**: 24px altura, texto 14px
- **lg**: 32px altura, texto 16px

## Iconografia

### Biblioteca de Ícones
**Lucide React** - Conjunto consistente de ícones SVG otimizados.

#### Tamanhos Padrão
- **16px**: Ícones pequenos (badges, inputs)
- **20px**: Ícones médios (botões, navegação)
- **24px**: Ícones grandes (títulos, destaque)
- **32px**: Ícones extra grandes (hero sections)

#### Estilo
- Linha de 2px de espessura
- Cantos arredondados
- Estilo minimalista e consistente

## Animações e Transições

### Princípios
- **Sutileza**: Animações discretas que não distraem
- **Performance**: 60fps em todos os dispositivos
- **Propósito**: Cada animação tem uma função clara

### Durações Padrão
- **Rápida**: 150ms - Hover states, mudanças de cor
- **Média**: 300ms - Transições de componentes
- **Lenta**: 500ms - Animações de entrada/saída

### Easing Functions
- **ease-out**: Para animações de entrada
- **ease-in**: Para animações de saída
- **ease-in-out**: Para transições bidirecionais

### Animações Específicas
- **Fade In**: Opacidade 0 → 1 em 300ms
- **Slide Up**: Transform translateY(10px) → 0 em 300ms
- **Scale In**: Transform scale(0.95) → 1 em 200ms
- **Hover Elevation**: Box-shadow sutil em 150ms

## Sombras

### Sistema de Elevação
- **Soft**: 0 2px 15px rgba(0,0,0,0.07) - Cards padrão
- **Medium**: 0 4px 25px rgba(0,0,0,0.1) - Cards em hover
- **Large**: 0 10px 40px rgba(0,0,0,0.15) - Modais e dropdowns

## Breakpoints Responsivos

### Dispositivos
- **sm**: 640px - Smartphones grandes
- **md**: 768px - Tablets
- **lg**: 1024px - Laptops
- **xl**: 1280px - Desktops
- **2xl**: 1536px - Telas grandes

### Estratégia Mobile-First
Todos os estilos são definidos primeiro para mobile, com media queries para telas maiores.

## Acessibilidade

### Contraste de Cores
Todas as combinações de cores atendem ao padrão WCAG AA (4.5:1).

### Navegação por Teclado
- **Tab**: Navegação entre elementos focáveis
- **Enter/Space**: Ativação de botões e links
- **Escape**: Fechamento de modais e dropdowns
- **Arrow Keys**: Navegação em menus e listas

### Screen Readers
- Textos alternativos em todas as imagens
- Labels descritivos em formulários
- Landmarks semânticos (header, main, footer)
- Estados de componentes claramente comunicados

## Implementação Técnica

### Tailwind CSS
O design system é implementado usando Tailwind CSS com configuração customizada.

### Componentes React
Todos os componentes são desenvolvidos em TypeScript com props tipadas.

### Testes de Acessibilidade
- Testes automatizados com jest-axe
- Testes manuais com screen readers
- Validação de contraste automática

## Manutenção e Evolução

### Versionamento
O design system segue versionamento semântico:
- **Major**: Mudanças que quebram compatibilidade
- **Minor**: Novas funcionalidades compatíveis
- **Patch**: Correções de bugs

### Documentação
- Storybook para documentação interativa
- Exemplos de uso para cada componente
- Guidelines de implementação

### Feedback e Iteração
- Coleta de feedback dos usuários
- Análise de métricas de usabilidade
- Iteração contínua baseada em dados

Este design system garante uma experiência consistente, acessível e agradável em toda a plataforma Emprego+, facilitando o desenvolvimento e manutenção da interface.

