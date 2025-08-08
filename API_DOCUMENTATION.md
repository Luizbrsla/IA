# Documentação da API - Emprego+

## Visão Geral

A API da plataforma Emprego+ foi projetada seguindo os princípios REST, oferecendo endpoints seguros e bem documentados para todas as funcionalidades da plataforma. Esta documentação serve como guia para a implementação futura do backend.

## Autenticação

### JWT (JSON Web Tokens)

A API utiliza JWT para autenticação. Todos os endpoints protegidos requerem um token válido no header `Authorization`.

```
Authorization: Bearer <jwt_token>
```

### Endpoints de Autenticação

#### POST /api/auth/register
Registra um novo usuário (candidato ou empresa).

**Request Body:**
```json
{
  "email": "usuario@email.com",
  "password": "senha123",
  "userType": "candidate|company",
  "profile": {
    "name": "Nome do Usuário",
    "location": "São Paulo, SP"
  }
}
```

**Response (201):**
```json
{
  "success": true,
  "data": {
    "user": {
      "id": "user_id",
      "email": "usuario@email.com",
      "userType": "candidate",
      "profile": {
        "name": "Nome do Usuário",
        "location": "São Paulo, SP"
      }
    },
    "token": "jwt_token"
  }
}
```

#### POST /api/auth/login
Autentica um usuário existente.

**Request Body:**
```json
{
  "email": "usuario@email.com",
  "password": "senha123"
}
```

**Response (200):**
```json
{
  "success": true,
  "data": {
    "user": {
      "id": "user_id",
      "email": "usuario@email.com",
      "userType": "candidate"
    },
    "token": "jwt_token"
  }
}
```

#### POST /api/auth/refresh
Renova um token JWT.

**Headers:**
```
Authorization: Bearer <current_token>
```

**Response (200):**
```json
{
  "success": true,
  "data": {
    "token": "new_jwt_token"
  }
}
```

#### POST /api/auth/logout
Invalida o token atual.

**Headers:**
```
Authorization: Bearer <jwt_token>
```

**Response (200):**
```json
{
  "success": true,
  "message": "Logout realizado com sucesso"
}
```

## Gestão de Usuários

### Candidatos

#### GET /api/users/profile
Retorna o perfil do candidato autenticado.

**Headers:**
```
Authorization: Bearer <jwt_token>
```

**Response (200):**
```json
{
  "success": true,
  "data": {
    "id": "user_id",
    "email": "candidato@email.com",
    "profile": {
      "name": "João Silva",
      "title": "Desenvolvedor Full Stack",
      "location": "São Paulo, SP",
      "bio": "Desenvolvedor apaixonado por tecnologia...",
      "avatar": "https://example.com/avatar.jpg"
    },
    "skills": [
      {
        "name": "React",
        "level": 90,
        "verified": true
      }
    ],
    "experience": [
      {
        "company": "TechCorp",
        "position": "Desenvolvedor Frontend",
        "startDate": "2022-01-01",
        "endDate": "2023-12-31",
        "description": "Desenvolvimento de interfaces..."
      }
    ],
    "preferences": {
      "salary": {
        "min": 8000,
        "max": 12000
      },
      "location": "São Paulo, SP",
      "remote": true,
      "contractType": "CLT"
    }
  }
}
```

#### PUT /api/users/profile
Atualiza o perfil do candidato.

**Request Body:**
```json
{
  "profile": {
    "name": "João Silva",
    "title": "Senior Full Stack Developer",
    "bio": "Desenvolvedor sênior com 5 anos de experiência..."
  }
}
```

#### POST /api/users/skills
Adiciona uma nova habilidade.

**Request Body:**
```json
{
  "name": "TypeScript",
  "level": 85
}
```

#### PUT /api/users/skills/:skillId
Atualiza uma habilidade existente.

#### DELETE /api/users/skills/:skillId
Remove uma habilidade.

### Empresas

#### GET /api/companies/profile
Retorna o perfil da empresa autenticada.

**Response (200):**
```json
{
  "success": true,
  "data": {
    "id": "company_id",
    "email": "empresa@email.com",
    "profile": {
      "name": "TechCorp",
      "industry": "Tecnologia",
      "size": "100-500",
      "location": "São Paulo, SP",
      "description": "Empresa líder em soluções tecnológicas...",
      "logo": "https://example.com/logo.jpg",
      "website": "https://techcorp.com"
    },
    "plan": "premium"
  }
}
```

#### PUT /api/companies/profile
Atualiza o perfil da empresa.

## Gestão de Vagas

#### GET /api/jobs
Lista vagas com filtros e paginação.

**Query Parameters:**
- `page`: Número da página (default: 1)
- `limit`: Itens por página (default: 20)
- `search`: Termo de busca
- `location`: Localização
- `remote`: true/false
- `contractType`: CLT, PJ, Estágio, Freelancer
- `experienceLevel`: Júnior, Pleno, Sênior
- `salaryMin`: Salário mínimo
- `salaryMax`: Salário máximo

**Response (200):**
```json
{
  "success": true,
  "data": {
    "jobs": [
      {
        "id": "job_id",
        "title": "Desenvolvedor Full Stack",
        "company": {
          "id": "company_id",
          "name": "TechCorp",
          "logo": "https://example.com/logo.jpg"
        },
        "location": "São Paulo, SP",
        "remote": true,
        "contractType": "CLT",
        "salary": {
          "min": 8000,
          "max": 12000,
          "currency": "BRL"
        },
        "experienceLevel": "Pleno",
        "skills": ["React", "Node.js", "TypeScript"],
        "createdAt": "2024-01-15T10:00:00Z",
        "matchScore": 95
      }
    ],
    "pagination": {
      "page": 1,
      "limit": 20,
      "total": 150,
      "pages": 8
    }
  }
}
```

#### GET /api/jobs/:jobId
Retorna detalhes de uma vaga específica.

**Response (200):**
```json
{
  "success": true,
  "data": {
    "id": "job_id",
    "title": "Desenvolvedor Full Stack",
    "description": "Buscamos um desenvolvedor experiente...",
    "requirements": [
      "3+ anos de experiência com React",
      "Conhecimento em Node.js",
      "Experiência com bancos de dados"
    ],
    "benefits": [
      "Vale refeição",
      "Plano de saúde",
      "Home office flexível"
    ],
    "company": {
      "id": "company_id",
      "name": "TechCorp",
      "logo": "https://example.com/logo.jpg",
      "description": "Empresa líder em tecnologia..."
    },
    "location": "São Paulo, SP",
    "remote": true,
    "contractType": "CLT",
    "salary": {
      "min": 8000,
      "max": 12000,
      "currency": "BRL"
    },
    "experienceLevel": "Pleno",
    "skills": ["React", "Node.js", "TypeScript"],
    "status": "active",
    "createdAt": "2024-01-15T10:00:00Z",
    "applicationsCount": 45
  }
}
```

#### POST /api/jobs (Empresa)
Cria uma nova vaga.

**Request Body:**
```json
{
  "title": "Desenvolvedor Frontend React",
  "description": "Buscamos um desenvolvedor frontend...",
  "requirements": [
    "2+ anos de experiência com React",
    "Conhecimento em TypeScript"
  ],
  "benefits": [
    "Vale refeição",
    "Plano de saúde"
  ],
  "location": "São Paulo, SP",
  "remote": true,
  "contractType": "CLT",
  "salary": {
    "min": 6000,
    "max": 9000
  },
  "experienceLevel": "Pleno",
  "skills": ["React", "TypeScript", "CSS"]
}
```

#### PUT /api/jobs/:jobId (Empresa)
Atualiza uma vaga existente.

#### DELETE /api/jobs/:jobId (Empresa)
Remove uma vaga.

## Sistema de Candidaturas

#### POST /api/jobs/:jobId/apply
Candidata-se a uma vaga.

**Headers:**
```
Authorization: Bearer <candidate_token>
```

**Request Body:**
```json
{
  "coverLetter": "Tenho grande interesse nesta posição..."
}
```

**Response (201):**
```json
{
  "success": true,
  "data": {
    "applicationId": "application_id",
    "jobId": "job_id",
    "status": "applied",
    "matchScore": 92,
    "appliedAt": "2024-01-15T14:30:00Z"
  }
}
```

#### GET /api/applications
Lista candidaturas do usuário.

**Response (200):**
```json
{
  "success": true,
  "data": {
    "applications": [
      {
        "id": "application_id",
        "job": {
          "id": "job_id",
          "title": "Desenvolvedor Full Stack",
          "company": "TechCorp"
        },
        "status": "applied",
        "matchScore": 92,
        "appliedAt": "2024-01-15T14:30:00Z"
      }
    ]
  }
}
```

#### GET /api/jobs/:jobId/applications (Empresa)
Lista candidatos de uma vaga.

**Response (200):**
```json
{
  "success": true,
  "data": {
    "applications": [
      {
        "id": "application_id",
        "candidate": {
          "id": "candidate_id",
          "name": "João Silva",
          "title": "Desenvolvedor Full Stack",
          "avatar": "https://example.com/avatar.jpg"
        },
        "status": "applied",
        "matchScore": 92,
        "appliedAt": "2024-01-15T14:30:00Z",
        "coverLetter": "Tenho grande interesse..."
      }
    ]
  }
}
```

#### PUT /api/applications/:applicationId/status (Empresa)
Atualiza status de uma candidatura.

**Request Body:**
```json
{
  "status": "interview_scheduled",
  "notes": "Candidato interessante, agendar entrevista"
}
```

## Sistema de IA e Recomendações

#### GET /api/ai/job-recommendations
Retorna recomendações de vagas para o candidato.

**Headers:**
```
Authorization: Bearer <candidate_token>
```

**Response (200):**
```json
{
  "success": true,
  "data": {
    "recommendations": [
      {
        "job": {
          "id": "job_id",
          "title": "Senior React Developer",
          "company": "InnovaTech"
        },
        "matchScore": 96,
        "reasons": [
          "Suas habilidades em React são altamente compatíveis",
          "Experiência anterior em startups é valorizada",
          "Localização preferida coincide"
        ]
      }
    ]
  }
}
```

#### POST /api/ai/skill-analysis
Analisa habilidades a partir de um currículo.

**Request Body:**
```json
{
  "resumeText": "Desenvolvedor com 5 anos de experiência..."
}
```

**Response (200):**
```json
{
  "success": true,
  "data": {
    "extractedSkills": [
      {
        "name": "React",
        "confidence": 0.95,
        "level": 85
      },
      {
        "name": "Node.js",
        "confidence": 0.88,
        "level": 80
      }
    ],
    "suggestedImprovements": [
      "Considere adicionar TypeScript ao seu perfil",
      "Certificações em AWS podem aumentar suas oportunidades"
    ]
  }
}
```

## Analytics e Relatórios

#### GET /api/analytics/dashboard (Empresa)
Retorna dados do dashboard da empresa.

**Response (200):**
```json
{
  "success": true,
  "data": {
    "overview": {
      "activeJobs": 12,
      "totalApplications": 156,
      "totalViews": 2400,
      "conversionRate": 8.5
    },
    "recentActivity": [
      {
        "type": "new_application",
        "jobTitle": "Desenvolvedor Frontend",
        "candidateName": "Maria Silva",
        "timestamp": "2024-01-15T16:30:00Z"
      }
    ],
    "topPerformingJobs": [
      {
        "jobId": "job_id",
        "title": "Desenvolvedor Full Stack",
        "applications": 45,
        "views": 234
      }
    ]
  }
}
```

## Códigos de Status HTTP

- **200 OK**: Requisição bem-sucedida
- **201 Created**: Recurso criado com sucesso
- **400 Bad Request**: Dados inválidos na requisição
- **401 Unauthorized**: Token inválido ou ausente
- **403 Forbidden**: Acesso negado
- **404 Not Found**: Recurso não encontrado
- **409 Conflict**: Conflito (ex: email já cadastrado)
- **422 Unprocessable Entity**: Dados válidos mas não processáveis
- **429 Too Many Requests**: Rate limit excedido
- **500 Internal Server Error**: Erro interno do servidor

## Rate Limiting

A API implementa rate limiting para prevenir abuso:

- **Autenticação**: 5 tentativas por minuto por IP
- **Busca de vagas**: 100 requisições por minuto por usuário
- **Candidaturas**: 10 candidaturas por hora por usuário
- **Geral**: 1000 requisições por hora por usuário autenticado

## Versionamento

A API utiliza versionamento via URL:
- Versão atual: `/api/v1/`
- Versões futuras: `/api/v2/`, `/api/v3/`, etc.

## Webhooks (Futuro)

Para integrações avançadas, a API oferecerá webhooks para eventos importantes:

- `application.created`: Nova candidatura
- `application.status_changed`: Status de candidatura alterado
- `job.created`: Nova vaga publicada
- `user.registered`: Novo usuário registrado

## SDKs e Bibliotecas

Planejamos oferecer SDKs oficiais para:
- JavaScript/TypeScript
- Python
- PHP
- Java

Esta documentação serve como base para a implementação do backend da plataforma Emprego+, garantindo uma API robusta, segura e bem documentada.

