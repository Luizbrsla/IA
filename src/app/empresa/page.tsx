'use client';

import React from 'react';
import { Building2, Users, Briefcase, TrendingUp, Plus, Eye, MessageSquare, Calendar, Filter, Search } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';

export default function EmpresaDashboard() {
  const companyData = {
    name: 'TechCorp',
    industry: 'Tecnologia',
    location: 'São Paulo, SP',
    employees: '500-1000',
    plan: 'Premium',
  };

  const stats = [
    { label: 'Vagas Ativas', value: '12', icon: Briefcase, color: 'primary', change: '+2' },
    { label: 'Candidatos', value: '156', icon: Users, color: 'secondary', change: '+23' },
    { label: 'Visualizações', value: '2.4K', icon: Eye, color: 'success', change: '+15%' },
    { label: 'Taxa de Conversão', value: '8.5%', icon: TrendingUp, color: 'warning', change: '+1.2%' },
  ];

  const activeJobs = [
    {
      id: 1,
      title: 'Desenvolvedor Full Stack Sênior',
      department: 'Tecnologia',
      candidates: 45,
      views: 234,
      status: 'Ativa',
      postedAt: '3 dias atrás',
      salary: 'R$ 8.000 - R$ 12.000',
    },
    {
      id: 2,
      title: 'Product Manager',
      department: 'Produto',
      candidates: 28,
      views: 189,
      status: 'Ativa',
      postedAt: '1 semana atrás',
      salary: 'R$ 10.000 - R$ 15.000',
    },
    {
      id: 3,
      title: 'Designer UX/UI',
      department: 'Design',
      candidates: 67,
      views: 312,
      status: 'Pausada',
      postedAt: '2 semanas atrás',
      salary: 'R$ 6.000 - R$ 9.000',
    },
  ];

  const recentCandidates = [
    {
      id: 1,
      name: 'Ana Silva',
      position: 'Desenvolvedor Full Stack Sênior',
      matchScore: 95,
      appliedAt: '2 horas atrás',
      status: 'Novo',
      experience: '5 anos',
      location: 'São Paulo, SP',
    },
    {
      id: 2,
      name: 'Carlos Santos',
      position: 'Product Manager',
      matchScore: 88,
      appliedAt: '1 dia atrás',
      status: 'Em análise',
      experience: '7 anos',
      location: 'Rio de Janeiro, RJ',
    },
    {
      id: 3,
      name: 'Maria Oliveira',
      position: 'Designer UX/UI',
      matchScore: 92,
      appliedAt: '2 dias atrás',
      status: 'Entrevista',
      experience: '4 anos',
      location: 'Belo Horizonte, MG',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Ativa': return 'success';
      case 'Pausada': return 'warning';
      case 'Novo': return 'primary';
      case 'Em análise': return 'warning';
      case 'Entrevista': return 'secondary';
      default: return 'neutral';
    }
  };

  return (
    <Layout>
      <div className="bg-neutral-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-neutral-900 mb-2">
                Dashboard - {companyData.name}
              </h1>
              <p className="text-lg text-neutral-600">
                Gerencie suas vagas e acompanhe o desempenho dos seus processos seletivos.
              </p>
            </div>
            <div className="flex gap-3 mt-4 md:mt-0">
              <Button variant="outline">
                <Filter className="w-4 h-4 mr-2" />
                Filtros
              </Button>
              <Button>
                <Plus className="w-4 h-4 mr-2" />
                Nova Vaga
              </Button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} variant="elevated">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-neutral-600 mb-1">{stat.label}</p>
                      <p className="text-2xl font-bold text-neutral-900">{stat.value}</p>
                      <div className="flex items-center mt-2">
                        <TrendingUp className="w-4 h-4 text-success-600 mr-1" />
                        <span className="text-sm text-success-600">{stat.change}</span>
                      </div>
                    </div>
                    <div className={`p-3 bg-${stat.color}-100 rounded-xl`}>
                      <Icon className={`w-6 h-6 text-${stat.color}-600`} />
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Active Jobs */}
              <Card>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold text-neutral-900">Vagas Ativas</h2>
                  <Button variant="outline" size="sm">Ver Todas</Button>
                </div>
                <div className="space-y-4">
                  {activeJobs.map((job) => (
                    <div key={job.id} className="p-4 border border-neutral-200 rounded-lg hover:bg-neutral-50 transition-colors duration-300">
                      <div className="flex justify-between items-start mb-3">
                        <div className="flex-1">
                          <h3 className="font-semibold text-neutral-900 mb-1">{job.title}</h3>
                          <p className="text-neutral-600 mb-2">{job.department}</p>
                          <div className="flex items-center space-x-4 text-sm text-neutral-500">
                            <span>Publicada: {job.postedAt}</span>
                            <span>Salário: {job.salary}</span>
                          </div>
                        </div>
                        <Badge 
                          variant={getStatusColor(job.status) as any} 
                          size="sm"
                        >
                          {job.status}
                        </Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex space-x-6 text-sm text-neutral-600">
                          <div className="flex items-center">
                            <Users className="w-4 h-4 mr-1" />
                            {job.candidates} candidatos
                          </div>
                          <div className="flex items-center">
                            <Eye className="w-4 h-4 mr-1" />
                            {job.views} visualizações
                          </div>
                        </div>
                        <div className="space-x-2">
                          <Button variant="outline" size="sm">Editar</Button>
                          <Button size="sm">Ver Candidatos</Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Recent Candidates */}
              <Card>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold text-neutral-900">Candidatos Recentes</h2>
                  <Button variant="outline" size="sm">Ver Todos</Button>
                </div>
                <div className="space-y-4">
                  {recentCandidates.map((candidate) => (
                    <div key={candidate.id} className="flex items-center justify-between p-4 border border-neutral-200 rounded-lg hover:bg-neutral-50 transition-colors duration-300">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                          <span className="text-white font-semibold">
                            {candidate.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-neutral-900">{candidate.name}</h3>
                          <p className="text-sm text-neutral-600">{candidate.position}</p>
                          <div className="flex items-center space-x-3 text-xs text-neutral-500 mt-1">
                            <span>{candidate.experience} de experiência</span>
                            <span>{candidate.location}</span>
                            <span>Candidatura: {candidate.appliedAt}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge variant="success" size="sm" className="mb-2">
                          {candidate.matchScore}% match
                        </Badge>
                        <div className="flex items-center space-x-2">
                          <Badge 
                            variant={getStatusColor(candidate.status) as any} 
                            size="sm"
                          >
                            {candidate.status}
                          </Badge>
                          <Button variant="ghost" size="sm">Ver Perfil</Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Company Info */}
              <Card>
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Building2 className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-1">{companyData.name}</h3>
                  <p className="text-neutral-600 mb-2">{companyData.industry}</p>
                  <Badge variant="primary" size="sm">
                    Plano {companyData.plan}
                  </Badge>
                </div>

                <div className="space-y-3 mb-6 text-sm">
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Localização:</span>
                    <span className="text-neutral-900">{companyData.location}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Funcionários:</span>
                    <span className="text-neutral-900">{companyData.employees}</span>
                  </div>
                </div>

                <Button variant="outline" className="w-full">
                  Editar Perfil
                </Button>
              </Card>

              {/* Quick Actions */}
              <Card>
                <h3 className="text-lg font-semibold text-neutral-900 mb-4">Ações Rápidas</h3>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <Plus className="w-4 h-4 mr-2" />
                    Publicar Nova Vaga
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Search className="w-4 h-4 mr-2" />
                    Buscar Talentos
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Mensagens
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Calendar className="w-4 h-4 mr-2" />
                    Agendar Entrevistas
                  </Button>
                </div>
              </Card>

              {/* Analytics Preview */}
              <Card>
                <h3 className="text-lg font-semibold text-neutral-900 mb-4">Analytics</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-neutral-600">Taxa de Resposta</span>
                      <span className="font-semibold text-neutral-900">68%</span>
                    </div>
                    <div className="w-full bg-neutral-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-primary-500 to-secondary-500 h-2 rounded-full" style={{ width: '68%' }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-neutral-600">Tempo Médio de Contratação</span>
                      <span className="font-semibold text-neutral-900">12 dias</span>
                    </div>
                    <div className="w-full bg-neutral-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-secondary-500 to-primary-500 h-2 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                </div>
                <Button variant="outline" className="w-full mt-4">
                  Ver Relatório Completo
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

