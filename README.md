# Emprego+ - Plataforma Nacional de Empregos

Uma plataforma moderna de empregos que conecta talentos e oportunidades com inteligência artificial e design centrado no usuário.

## 🚀 Características Principais

- **Design "Calmo"**: Interface suave com paleta de cores pastel e espaçamentos generosos
- **Mobile-First**: Totalmente responsivo e otimizado para dispositivos móveis
- **Acessibilidade**: Conformidade com diretrizes WCAG AA
- **Arquitetura Escalável**: Preparado para integração com IA e crescimento
- **Componentes Reutilizáveis**: Design system consistente e bem documentado

## 🛠️ Tecnologias Utilizadas

### Frontend
- **Next.js 15.4.6** - Framework React com SSR
- **React 18** - Biblioteca para interfaces de usuário
- **TypeScript** - Tipagem estática para JavaScript
- **Tailwind CSS** - Framework CSS utility-first
- **Lucide React** - Biblioteca de ícones SVG

### Dependências Principais
- `clsx` - Utilitário para classes condicionais
- `tailwind-merge` - Merge inteligente de classes Tailwind
- `framer-motion` - Animações e transições
- `axios` - Cliente HTTP
- `date-fns` - Manipulação de datas

## 📁 Estrutura do Projeto

```
emprego-plus/
├── public/                 # Assets estáticos
│   ├── images/            # Imagens e ilustrações
│   ├── icons/             # Ícones personalizados
│   └── favicon.png        # Favicon da aplicação
├── src/
│   ├── app/               # App Router do Next.js
│   │   ├── layout.tsx     # Layout raiz
│   │   ├── page.tsx       # Página inicial
│   │   ├── vagas/         # Páginas de vagas
│   │   ├── candidato/     # Dashboard do candidato
│   │   ├── empresa/       # Dashboard da empresa
│   │   └── sobre/         # Página institucional
│   ├── components/
│   │   ├── ui/            # Componentes base
│   │   ├── layout/        # Componentes de layout
│   │   └── forms/         # Componentes de formulários
│   ├── lib/               # Utilitários e configurações
│   └── utils/             # Funções auxiliares
├── docs/                  # Documentação técnica
│   ├── ARCHITECTURE.md    # Arquitetura do sistema
│   ├── API_DOCUMENTATION.md # Documentação das APIs
│   └── DESIGN_SYSTEM.md   # Sistema de design
└── README.md              # Este arquivo
```

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Instalação

1. **Clone o repositório**
   ```bash
   git clone <url-do-repositorio>
   cd emprego-plus
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Execute o servidor de desenvolvimento**
   ```bash
   npm run dev
   ```

4. **Acesse a aplicação**
   Abra [http://localhost:3000](http://localhost:3000) no seu navegador

### Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria a build de produção
- `npm run start` - Inicia o servidor de produção
- `npm run lint` - Executa o linter ESLint

## 📱 Páginas Implementadas

### 🏠 Página Inicial (`/`)
- Hero section com busca de vagas
- Estatísticas da plataforma
- Vagas em destaque
- Seção de benefícios
- Call-to-action para cadastro

### 💼 Busca de Vagas (`/vagas`)
- Sistema de busca avançada
- Filtros por localização, salário, tipo de contrato
- Lista de vagas com match score
- Paginação e ordenação

### 👤 Dashboard do Candidato (`/candidato`)
- Estatísticas pessoais
- Candidaturas recentes
- Vagas recomendadas
- Perfil e habilidades
- Ações rápidas

### 🏢 Dashboard da Empresa (`/empresa`)
- Métricas de vagas ativas
- Candidatos recentes
- Analytics de performance
- Gestão de vagas
- Informações da empresa

### ℹ️ Sobre (`/sobre`)
- Missão e valores da empresa
- Equipe e tecnologia
- Estatísticas de impacto
- Call-to-action

## 🎨 Design System

### Paleta de Cores
- **Primary**: Azul suave (#0ea5e9 a #0c4a6e)
- **Secondary**: Verde água (#14b8a6 a #134e4a)
- **Neutral**: Cinzas (#f8fafc a #0f172a)
- **Success**: Verde (#22c55e)
- **Warning**: Amarelo (#f59e0b)
- **Error**: Vermelho (#ef4444)

### Componentes Principais
- **Button**: 5 variantes (primary, secondary, outline, ghost, danger)
- **Input**: Com suporte a ícones e estados de erro
- **Card**: 3 variantes (default, elevated, outlined)
- **Badge**: 6 variantes semânticas
- **Layout**: Header, Footer e Layout responsivos

### Tipografia
- **Fonte**: Inter (Google Fonts)
- **Hierarquia**: 6xl a xs com line-heights otimizados
- **Pesos**: Regular (400) a Bold (700)

## 🔮 Roadmap Futuro

### Fase 1 - Backend (3 meses)
- API REST com Node.js e MongoDB
- Sistema de autenticação JWT
- CRUD completo de usuários e vagas
- Sistema de candidaturas

### Fase 2 - Funcionalidades Avançadas (3 meses)
- Sistema de busca com Elasticsearch
- Notificações em tempo real
- Dashboard com analytics
- Sistema de avaliações

### Fase 3 - Inteligência Artificial (6 meses)
- JobMatch AI com GPT-4
- Sistema de recomendações
- Análise de compatibilidade
- Chatbot de carreiras

### Fase 4 - Escala e Otimização (3 meses)
- Microserviços
- Cache distribuído
- CDN para assets
- Monitoramento avançado

## 🤖 Arquitetura de IA Planejada

### JobMatch AI
- **NLP**: Análise de descrições de vagas e currículos
- **Embeddings**: Vetorização semântica para matching
- **Machine Learning**: Algoritmos de recomendação
- **Feedback Loop**: Aprendizado contínuo

### Tecnologias de IA
- OpenAI GPT-4 para análise de texto
- Sentence Transformers para embeddings
- scikit-learn para ML tradicional
- TensorFlow/PyTorch para deep learning

## 🔒 Segurança e Privacidade

### Medidas Implementadas
- Validação de entrada em todos os formulários
- Sanitização de dados
- Headers de segurança configurados
- Conformidade com LGPD planejada

### Futuras Implementações
- Autenticação JWT
- Criptografia de dados sensíveis
- Rate limiting
- Auditoria de acessos

## 📊 Performance

### Otimizações Implementadas
- Next.js com SSR e SSG
- Lazy loading de componentes
- Otimização de imagens
- CSS-in-JS com Tailwind

### Métricas Alvo
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms

## 🌐 Acessibilidade

### Conformidade WCAG AA
- Contraste mínimo de 4.5:1
- Navegação completa por teclado
- Textos alternativos em imagens
- Landmarks semânticos
- Estados de foco visíveis

### Testes de Acessibilidade
- Validação automática com axe-core
- Testes manuais com screen readers
- Validação de contraste

## 📚 Documentação

- **[ARCHITECTURE.md](./ARCHITECTURE.md)** - Arquitetura completa do sistema
- **[API_DOCUMENTATION.md](./API_DOCUMENTATION.md)** - Documentação das APIs
- **[DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md)** - Sistema de design detalhado

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👥 Equipe

- **Design & Frontend**: Desenvolvido com foco em UX/UI
- **Arquitetura**: Preparado para escala e IA
- **Documentação**: Completa e detalhada

## 📞 Contato

- **Email**: contato@empregoplus.com.br
- **Website**: https://empregoplus.com.br
- **LinkedIn**: /company/emprego-plus

---

**Emprego+** - Conectando talentos e oportunidades com inteligência artificial 🚀
