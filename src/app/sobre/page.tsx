'use client';

import React from 'react';
import { Heart, Users, Target, Zap, Award, Globe, Shield, Lightbulb } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export default function SobrePage() {
  const values = [
    {
      icon: Heart,
      title: 'Centrado no Usuário',
      description: 'Priorizamos a experiência do usuário em cada decisão de design e desenvolvimento.',
    },
    {
      icon: Zap,
      title: 'Inovação Constante',
      description: 'Utilizamos as mais recentes tecnologias de IA para conectar talentos e oportunidades.',
    },
    {
      icon: Shield,
      title: 'Transparência',
      description: 'Processos claros e honestos, sem viés ou discriminação em nossos algoritmos.',
    },
    {
      icon: Globe,
      title: 'Inclusão',
      description: 'Promovemos diversidade e igualdade de oportunidades para todos os profissionais.',
    },
  ];

  const team = [
    {
      name: 'Ana Silva',
      role: 'CEO & Co-fundadora',
      description: 'Ex-diretora de RH com 15 anos de experiência em recrutamento e seleção.',
    },
    {
      name: 'Carlos Santos',
      role: 'CTO & Co-fundador',
      description: 'Especialista em IA e Machine Learning, ex-engenheiro sênior do Google.',
    },
    {
      name: 'Maria Oliveira',
      role: 'Head of Design',
      description: 'Designer UX/UI premiada, focada em criar experiências inclusivas e acessíveis.',
    },
    {
      name: 'João Costa',
      role: 'Head of Data Science',
      description: 'PhD em Ciência de Dados, especialista em algoritmos de matching e NLP.',
    },
  ];

  const stats = [
    { value: '50K+', label: 'Candidatos Ativos' },
    { value: '3K+', label: 'Empresas Parceiras' },
    { value: '98%', label: 'Taxa de Satisfação' },
    { value: '24h', label: 'Tempo Médio de Match' },
  ];

  return (
    <Layout>
      <div className="bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-20 lg:py-32">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 mb-6 leading-tight">
              Conectando talentos com
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
                {' '}inteligência artificial
              </span>
            </h1>
            <p className="text-xl text-neutral-600 mb-8 leading-relaxed">
              Somos uma plataforma nacional de empregos que revoluciona a forma como pessoas 
              encontram oportunidades e empresas descobrem talentos, usando IA e design centrado no usuário.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                Conheça Nossa Missão
              </Button>
              <Button size="lg" variant="outline">
                Fale Conosco
              </Button>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
                  Nossa Missão
                </h2>
                <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                  Democratizar o acesso ao mercado de trabalho brasileiro, eliminando barreiras 
                  e vieses através de tecnologia avançada e design inclusivo. Acreditamos que 
                  toda pessoa merece encontrar uma oportunidade que valorize seu potencial.
                </p>
                <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                  Utilizamos algoritmos de inteligência artificial para criar matches mais 
                  precisos entre candidatos e vagas, considerando não apenas habilidades técnicas, 
                  mas também fit cultural e potencial de crescimento.
                </p>
                <div className="flex items-center space-x-4">
                  <Target className="w-8 h-8 text-primary-600" />
                  <span className="text-lg font-semibold text-neutral-900">
                    Mais de 45.000 profissionais já encontraram suas oportunidades conosco
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <Card key={index} variant="elevated" className="text-center">
                    <div className="text-3xl font-bold text-primary-600 mb-2">{stat.value}</div>
                    <div className="text-neutral-600">{stat.label}</div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                Nossos Valores
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                Princípios que guiam cada decisão e moldam nossa cultura organizacional
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card key={index} variant="elevated" className="text-center h-full">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl mb-6">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-neutral-600 leading-relaxed">
                      {value.description}
                    </p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="grid grid-cols-2 gap-6">
                  <Card variant="elevated" className="p-6">
                    <Lightbulb className="w-8 h-8 text-primary-600 mb-4" />
                    <h4 className="font-semibold text-neutral-900 mb-2">IA Avançada</h4>
                    <p className="text-sm text-neutral-600">
                      Algoritmos de machine learning para matches precisos
                    </p>
                  </Card>
                  <Card variant="elevated" className="p-6">
                    <Award className="w-8 h-8 text-secondary-600 mb-4" />
                    <h4 className="font-semibold text-neutral-900 mb-2">Design Premiado</h4>
                    <p className="text-sm text-neutral-600">
                      Interface intuitiva e acessível para todos
                    </p>
                  </Card>
                  <Card variant="elevated" className="p-6">
                    <Shield className="w-8 h-8 text-success-600 mb-4" />
                    <h4 className="font-semibold text-neutral-900 mb-2">Segurança</h4>
                    <p className="text-sm text-neutral-600">
                      Proteção total dos dados pessoais e profissionais
                    </p>
                  </Card>
                  <Card variant="elevated" className="p-6">
                    <Zap className="w-8 h-8 text-warning-600 mb-4" />
                    <h4 className="font-semibold text-neutral-900 mb-2">Performance</h4>
                    <p className="text-sm text-neutral-600">
                      Resultados rápidos e eficientes
                    </p>
                  </Card>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
                  Tecnologia que Faz a Diferença
                </h2>
                <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                  Nossa plataforma utiliza as mais avançadas tecnologias de inteligência artificial 
                  para analisar perfis, identificar compatibilidades e sugerir oportunidades 
                  personalizadas para cada usuário.
                </p>
                <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
                  Combinamos processamento de linguagem natural (NLP), análise de sentimentos 
                  e algoritmos de recomendação para criar uma experiência única no mercado brasileiro.
                </p>
                <Button size="lg" variant="outline">
                  Saiba Mais Sobre Nossa Tecnologia
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                Conheça Nossa Equipe
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                Profissionais apaixonados por tecnologia e transformação do mercado de trabalho
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <Card key={index} variant="elevated" className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary-600 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {member.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Faça Parte da Revolução
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Junte-se a milhares de profissionais e empresas que já transformaram 
              suas carreiras e processos de recrutamento conosco.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-primary-600 hover:bg-neutral-100">
                Começar Agora
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-600">
                Falar com Especialista
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

