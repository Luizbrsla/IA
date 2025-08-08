'use client';

import React from 'react';
import { Search, MapPin, Briefcase, Users, TrendingUp, Heart, Star, ArrowRight, CheckCircle } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';

export default function HomePage() {
  const stats = [
    { label: 'Vagas Ativas', value: '12.5K+', icon: Briefcase },
    { label: 'Empresas Parceiras', value: '2.8K+', icon: Users },
    { label: 'Candidatos Contratados', value: '45K+', icon: TrendingUp },
    { label: 'Taxa de Satisfação', value: '98%', icon: Heart },
  ];

  const featuredJobs = [
    {
      id: 1,
      title: 'Desenvolvedor Full Stack',
      company: 'TechCorp',
      location: 'São Paulo, SP',
      type: 'CLT',
      salary: 'R$ 8.000 - R$ 12.000',
      matchScore: 95,
      tags: ['React', 'Node.js', 'TypeScript'],
      remote: true,
    },
    {
      id: 2,
      title: 'Designer UX/UI',
      company: 'DesignStudio',
      location: 'Rio de Janeiro, RJ',
      type: 'PJ',
      salary: 'R$ 6.000 - R$ 9.000',
      matchScore: 88,
      tags: ['Figma', 'Prototyping', 'User Research'],
      remote: false,
    },
    {
      id: 3,
      title: 'Analista de Dados',
      company: 'DataCorp',
      location: 'Belo Horizonte, MG',
      type: 'CLT',
      salary: 'R$ 7.000 - R$ 10.000',
      matchScore: 92,
      tags: ['Python', 'SQL', 'Machine Learning'],
      remote: true,
    },
  ];

  const benefits = [
    {
      title: 'Busca Inteligente',
      description: 'Algoritmos de IA que encontram as vagas perfeitas para seu perfil',
      icon: Search,
    },
    {
      title: 'Match Personalizado',
      description: 'Score de compatibilidade baseado em suas habilidades e experiência',
      icon: Star,
    },
    {
      title: 'Processo Simplificado',
      description: 'Máximo de 3 cliques para se candidatar a qualquer vaga',
      icon: CheckCircle,
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 mb-6 leading-tight">
              Encontre sua próxima
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
                {' '}oportunidade
              </span>
            </h1>
            <p className="text-xl text-neutral-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              A plataforma nacional de empregos que conecta talentos e oportunidades 
              com inteligência artificial e design centrado no usuário.
            </p>

            {/* Search Bar */}
            <div className="max-w-4xl mx-auto mb-12">
              <Card variant="elevated" padding="md" className="bg-white/80 backdrop-blur-sm">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <Input
                      placeholder="Cargo, empresa ou palavra-chave"
                      leftIcon={<Search className="w-5 h-5" />}
                      className="border-0 bg-transparent text-lg"
                    />
                  </div>
                  <div className="flex-1">
                    <Input
                      placeholder="Cidade, estado ou 'remoto'"
                      leftIcon={<MapPin className="w-5 h-5" />}
                      className="border-0 bg-transparent text-lg"
                    />
                  </div>
                  <Button size="lg" className="md:px-8">
                    Buscar Vagas
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </Card>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 rounded-xl mb-3">
                      <Icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <div className="text-2xl font-bold text-neutral-900 mb-1">{stat.value}</div>
                    <div className="text-sm text-neutral-600">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Jobs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Vagas em Destaque
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Oportunidades selecionadas especialmente para você com base no seu perfil
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {featuredJobs.map((job) => (
              <Card key={job.id} variant="elevated" hover className="group">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-neutral-900 mb-1 group-hover:text-primary-600 transition-colors duration-300">
                      {job.title}
                    </h3>
                    <p className="text-neutral-600 mb-2">{job.company}</p>
                    <div className="flex items-center text-sm text-neutral-500 mb-3">
                      <MapPin className="w-4 h-4 mr-1" />
                      {job.location}
                      {job.remote && (
                        <Badge variant="secondary" size="sm" className="ml-2">
                          Remoto
                        </Badge>
                      )}
                    </div>
                  </div>
                  <Badge variant="success" size="sm" rounded>
                    {job.matchScore}% match
                  </Badge>
                </div>

                <div className="mb-4">
                  <div className="text-sm text-neutral-500 mb-1">Salário</div>
                  <div className="font-semibold text-neutral-900">{job.salary}</div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {job.tags.map((tag) => (
                    <Badge key={tag} variant="neutral" size="sm">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <Button variant="outline" className="w-full group-hover:bg-primary-600 group-hover:text-white group-hover:border-primary-600 transition-all duration-300">
                  Ver Detalhes
                </Button>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" variant="outline">
              Ver Todas as Vagas
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Por que escolher o Emprego+?
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Tecnologia avançada e design centrado no usuário para uma experiência única
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Pronto para dar o próximo passo?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Cadastre-se gratuitamente e comece a receber oportunidades personalizadas
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary-600 hover:bg-neutral-100">
              Sou Candidato
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-600">
              Sou Empresa
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
