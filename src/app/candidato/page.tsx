'use client';

import React from 'react';
import { User, Briefcase, Heart, Eye, MessageSquare, TrendingUp, Award, Calendar, MapPin, Mail, Phone } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';

export default function CandidatoDashboard() {
  const candidateData = {
    name: 'João Silva',
    title: 'Desenvolvedor Full Stack',
    location: 'São Paulo, SP',
    email: 'joao.silva@email.com',
    phone: '(11) 99999-9999',
    profileCompletion: 85,
    matchScore: 92,
  };

  const applications = [
    {
      id: 1,
      jobTitle: 'Desenvolvedor Full Stack Sênior',
      company: 'TechCorp',
      status: 'Em análise',
      appliedAt: '2 dias atrás',
      matchScore: 95,
      statusColor: 'warning',
    },
    {
      id: 2,
      jobTitle: 'Frontend Developer',
      company: 'WebAgency',
      status: 'Entrevista agendada',
      appliedAt: '1 semana atrás',
      matchScore: 90,
      statusColor: 'primary',
    },
    {
      id: 3,
      jobTitle: 'React Developer',
      company: 'StartupTech',
      status: 'Rejeitado',
      appliedAt: '2 semanas atrás',
      matchScore: 87,
      statusColor: 'error',
    },
  ];

  const recommendations = [
    {
      id: 1,
      title: 'Senior React Developer',
      company: 'InnovaTech',
      location: 'São Paulo, SP',
      salary: 'R$ 10.000 - R$ 15.000',
      matchScore: 96,
      remote: true,
    },
    {
      id: 2,
      title: 'Full Stack Engineer',
      company: 'CloudSoft',
      location: 'Rio de Janeiro, RJ',
      salary: 'R$ 8.000 - R$ 12.000',
      matchScore: 94,
      remote: true,
    },
    {
      id: 3,
      title: 'Tech Lead Frontend',
      company: 'DigitalCorp',
      location: 'Belo Horizonte, MG',
      salary: 'R$ 12.000 - R$ 18.000',
      matchScore: 91,
      remote: false,
    },
  ];

  const skills = [
    { name: 'React', level: 90 },
    { name: 'Node.js', level: 85 },
    { name: 'TypeScript', level: 80 },
    { name: 'Python', level: 75 },
    { name: 'MongoDB', level: 70 },
  ];

  const stats = [
    { label: 'Candidaturas', value: '12', icon: Briefcase, color: 'primary' },
    { label: 'Visualizações', value: '156', icon: Eye, color: 'secondary' },
    { label: 'Favoritos', value: '8', icon: Heart, color: 'error' },
    { label: 'Mensagens', value: '3', icon: MessageSquare, color: 'warning' },
  ];

  return (
    <Layout>
      <div className="bg-neutral-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-neutral-900 mb-2">
              Olá, {candidateData.name}! 👋
            </h1>
            <p className="text-lg text-neutral-600">
              Bem-vindo ao seu dashboard. Aqui você pode acompanhar suas candidaturas e descobrir novas oportunidades.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Stats Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <Card key={index} variant="elevated" className="text-center">
                      <div className={`inline-flex items-center justify-center w-12 h-12 bg-${stat.color}-100 rounded-xl mb-3`}>
                        <Icon className={`w-6 h-6 text-${stat.color}-600`} />
                      </div>
                      <div className="text-2xl font-bold text-neutral-900 mb-1">{stat.value}</div>
                      <div className="text-sm text-neutral-600">{stat.label}</div>
                    </Card>
                  );
                })}
              </div>

              {/* Recent Applications */}
              <Card>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold text-neutral-900">Candidaturas Recentes</h2>
                  <Button variant="outline" size="sm">Ver Todas</Button>
                </div>
                <div className="space-y-4">
                  {applications.map((application) => (
                    <div key={application.id} className="flex items-center justify-between p-4 border border-neutral-200 rounded-lg hover:bg-neutral-50 transition-colors duration-300">
                      <div className="flex-1">
                        <h3 className="font-semibold text-neutral-900 mb-1">{application.jobTitle}</h3>
                        <p className="text-neutral-600 mb-2">{application.company}</p>
                        <div className="flex items-center space-x-4 text-sm text-neutral-500">
                          <span>Candidatura: {application.appliedAt}</span>
                          <Badge variant="success" size="sm">{application.matchScore}% match</Badge>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge 
                          variant={application.statusColor as any} 
                          size="sm" 
                          className="mb-2"
                        >
                          {application.status}
                        </Badge>
                        <div>
                          <Button variant="ghost" size="sm">Ver Detalhes</Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Job Recommendations */}
              <Card>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold text-neutral-900">Vagas Recomendadas</h2>
                  <Button variant="outline" size="sm">Ver Mais</Button>
                </div>
                <div className="space-y-4">
                  {recommendations.map((job) => (
                    <div key={job.id} className="p-4 border border-neutral-200 rounded-lg hover:bg-neutral-50 transition-colors duration-300">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h3 className="font-semibold text-neutral-900 mb-1">{job.title}</h3>
                          <p className="text-neutral-600 mb-2">{job.company}</p>
                          <div className="flex items-center text-sm text-neutral-500 space-x-4">
                            <div className="flex items-center">
                              <MapPin className="w-4 h-4 mr-1" />
                              {job.location}
                            </div>
                            {job.remote && (
                              <Badge variant="secondary" size="sm">Remoto</Badge>
                            )}
                          </div>
                        </div>
                        <Badge variant="success" size="sm" rounded>
                          {job.matchScore}% match
                        </Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="font-semibold text-neutral-900">{job.salary}</span>
                        <div className="space-x-2">
                          <Button variant="outline" size="sm">Ver Detalhes</Button>
                          <Button size="sm">Candidatar-se</Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Profile Card */}
              <Card>
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <User className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-1">{candidateData.name}</h3>
                  <p className="text-neutral-600 mb-2">{candidateData.title}</p>
                  <div className="flex items-center justify-center text-sm text-neutral-500 mb-4">
                    <MapPin className="w-4 h-4 mr-1" />
                    {candidateData.location}
                  </div>
                  <Badge variant="success" size="sm" rounded>
                    {candidateData.matchScore}% perfil otimizado
                  </Badge>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-neutral-600">
                    <Mail className="w-4 h-4 mr-2" />
                    {candidateData.email}
                  </div>
                  <div className="flex items-center text-sm text-neutral-600">
                    <Phone className="w-4 h-4 mr-2" />
                    {candidateData.phone}
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-neutral-600">Perfil completo</span>
                    <span className="font-semibold text-neutral-900">{candidateData.profileCompletion}%</span>
                  </div>
                  <div className="w-full bg-neutral-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-primary-500 to-secondary-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${candidateData.profileCompletion}%` }}
                    ></div>
                  </div>
                </div>

                <Button variant="outline" className="w-full">
                  Editar Perfil
                </Button>
              </Card>

              {/* Skills */}
              <Card>
                <h3 className="text-lg font-semibold text-neutral-900 mb-4">Principais Habilidades</h3>
                <div className="space-y-4">
                  {skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-neutral-700">{skill.name}</span>
                        <span className="text-neutral-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-neutral-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-primary-500 to-secondary-500 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4">
                  Gerenciar Habilidades
                </Button>
              </Card>

              {/* Quick Actions */}
              <Card>
                <h3 className="text-lg font-semibold text-neutral-900 mb-4">Ações Rápidas</h3>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <Calendar className="w-4 h-4 mr-2" />
                    Agendar Entrevista
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    Ver Analytics
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Award className="w-4 h-4 mr-2" />
                    Certificações
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

