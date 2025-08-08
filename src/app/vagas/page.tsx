'use client';

import React, { useState } from 'react';
import { Search, MapPin, Filter, SlidersHorizontal, Briefcase, Clock, DollarSign, Building2 } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Card from '@/components/ui/Card';
import Badge from '@/components/ui/Badge';

export default function VagasPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const jobs = [
    {
      id: 1,
      title: 'Desenvolvedor Full Stack Sênior',
      company: 'TechCorp',
      location: 'São Paulo, SP',
      type: 'CLT',
      salary: 'R$ 8.000 - R$ 12.000',
      matchScore: 95,
      tags: ['React', 'Node.js', 'TypeScript', 'MongoDB'],
      remote: true,
      postedAt: '2 dias atrás',
      description: 'Buscamos um desenvolvedor experiente para liderar projetos de alta complexidade...',
    },
    {
      id: 2,
      title: 'Designer UX/UI Pleno',
      company: 'DesignStudio',
      location: 'Rio de Janeiro, RJ',
      type: 'PJ',
      salary: 'R$ 6.000 - R$ 9.000',
      matchScore: 88,
      tags: ['Figma', 'Prototyping', 'User Research', 'Design System'],
      remote: false,
      postedAt: '1 dia atrás',
      description: 'Procuramos um designer criativo para desenvolver interfaces inovadoras...',
    },
    {
      id: 3,
      title: 'Analista de Dados Sênior',
      company: 'DataCorp',
      location: 'Belo Horizonte, MG',
      type: 'CLT',
      salary: 'R$ 7.000 - R$ 10.000',
      matchScore: 92,
      tags: ['Python', 'SQL', 'Machine Learning', 'Power BI'],
      remote: true,
      postedAt: '3 dias atrás',
      description: 'Oportunidade para trabalhar com big data e inteligência artificial...',
    },
    {
      id: 4,
      title: 'Product Manager',
      company: 'StartupTech',
      location: 'São Paulo, SP',
      type: 'CLT',
      salary: 'R$ 10.000 - R$ 15.000',
      matchScore: 85,
      tags: ['Product Strategy', 'Agile', 'Analytics', 'Leadership'],
      remote: true,
      postedAt: '1 semana atrás',
      description: 'Lidere o desenvolvimento de produtos digitais inovadores...',
    },
    {
      id: 5,
      title: 'Desenvolvedor Frontend React',
      company: 'WebAgency',
      location: 'Florianópolis, SC',
      type: 'PJ',
      salary: 'R$ 5.000 - R$ 8.000',
      matchScore: 90,
      tags: ['React', 'JavaScript', 'CSS', 'Next.js'],
      remote: true,
      postedAt: '4 dias atrás',
      description: 'Desenvolva interfaces modernas e responsivas para nossos clientes...',
    },
    {
      id: 6,
      title: 'DevOps Engineer',
      company: 'CloudTech',
      location: 'Brasília, DF',
      type: 'CLT',
      salary: 'R$ 9.000 - R$ 13.000',
      matchScore: 87,
      tags: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'],
      remote: true,
      postedAt: '5 dias atrás',
      description: 'Gerencie infraestrutura em nuvem e processos de deployment...',
    },
  ];

  const filters = [
    { label: 'Remoto', count: 156 },
    { label: 'CLT', count: 89 },
    { label: 'PJ', count: 67 },
    { label: 'Estágio', count: 23 },
    { label: 'Freelancer', count: 45 },
  ];

  return (
    <Layout>
      <div className="bg-neutral-50 min-h-screen">
        {/* Header Section */}
        <section className="bg-white border-b border-neutral-200 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                Encontre sua vaga ideal
              </h1>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                Explore milhares de oportunidades de emprego em todo o Brasil
              </p>
            </div>

            {/* Search Bar */}
            <Card variant="elevated" padding="md" className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <Input
                    placeholder="Cargo, empresa ou palavra-chave"
                    leftIcon={<Search className="w-5 h-5" />}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="text-lg"
                  />
                </div>
                <div className="flex-1">
                  <Input
                    placeholder="Cidade, estado ou 'remoto'"
                    leftIcon={<MapPin className="w-5 h-5" />}
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="text-lg"
                  />
                </div>
                <Button size="lg" className="md:px-8">
                  <Search className="w-5 h-5 mr-2" />
                  Buscar
                </Button>
              </div>
            </Card>
          </div>
        </section>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filters */}
            <div className="lg:w-80">
              <div className="lg:hidden mb-4">
                <Button
                  variant="outline"
                  onClick={() => setShowFilters(!showFilters)}
                  className="w-full"
                >
                  <SlidersHorizontal className="w-4 h-4 mr-2" />
                  Filtros
                </Button>
              </div>

              <div className={`space-y-6 ${showFilters ? 'block' : 'hidden lg:block'}`}>
                <Card>
                  <h3 className="font-semibold text-neutral-900 mb-4">Tipo de Contrato</h3>
                  <div className="space-y-3">
                    {filters.map((filter) => (
                      <label key={filter.label} className="flex items-center space-x-3 cursor-pointer">
                        <input
                          type="checkbox"
                          className="rounded border-neutral-300 text-primary-600 focus:ring-primary-500"
                        />
                        <span className="text-neutral-700">{filter.label}</span>
                        <span className="text-sm text-neutral-500">({filter.count})</span>
                      </label>
                    ))}
                  </div>
                </Card>

                <Card>
                  <h3 className="font-semibold text-neutral-900 mb-4">Faixa Salarial</h3>
                  <div className="space-y-3">
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input type="checkbox" className="rounded border-neutral-300 text-primary-600 focus:ring-primary-500" />
                      <span className="text-neutral-700">Até R$ 3.000</span>
                    </label>
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input type="checkbox" className="rounded border-neutral-300 text-primary-600 focus:ring-primary-500" />
                      <span className="text-neutral-700">R$ 3.000 - R$ 6.000</span>
                    </label>
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input type="checkbox" className="rounded border-neutral-300 text-primary-600 focus:ring-primary-500" />
                      <span className="text-neutral-700">R$ 6.000 - R$ 10.000</span>
                    </label>
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input type="checkbox" className="rounded border-neutral-300 text-primary-600 focus:ring-primary-500" />
                      <span className="text-neutral-700">Acima de R$ 10.000</span>
                    </label>
                  </div>
                </Card>

                <Card>
                  <h3 className="font-semibold text-neutral-900 mb-4">Experiência</h3>
                  <div className="space-y-3">
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input type="checkbox" className="rounded border-neutral-300 text-primary-600 focus:ring-primary-500" />
                      <span className="text-neutral-700">Estágio</span>
                    </label>
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input type="checkbox" className="rounded border-neutral-300 text-primary-600 focus:ring-primary-500" />
                      <span className="text-neutral-700">Júnior (1-3 anos)</span>
                    </label>
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input type="checkbox" className="rounded border-neutral-300 text-primary-600 focus:ring-primary-500" />
                      <span className="text-neutral-700">Pleno (3-6 anos)</span>
                    </label>
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input type="checkbox" className="rounded border-neutral-300 text-primary-600 focus:ring-primary-500" />
                      <span className="text-neutral-700">Sênior (6+ anos)</span>
                    </label>
                  </div>
                </Card>
              </div>
            </div>

            {/* Job Listings */}
            <div className="flex-1">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h2 className="text-xl font-semibold text-neutral-900">
                    {jobs.length} vagas encontradas
                  </h2>
                  <p className="text-neutral-600">Ordenadas por relevância</p>
                </div>
                <select className="border border-neutral-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                  <option>Mais relevantes</option>
                  <option>Mais recentes</option>
                  <option>Maior salário</option>
                  <option>Menor salário</option>
                </select>
              </div>

              <div className="space-y-6">
                {jobs.map((job) => (
                  <Card key={job.id} variant="elevated" hover className="group cursor-pointer">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-semibold text-neutral-900 group-hover:text-primary-600 transition-colors duration-300">
                            {job.title}
                          </h3>
                          {job.remote && (
                            <Badge variant="secondary" size="sm">
                              Remoto
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center text-neutral-600 mb-3 space-x-4">
                          <div className="flex items-center">
                            <Building2 className="w-4 h-4 mr-1" />
                            {job.company}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {job.location}
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {job.postedAt}
                          </div>
                        </div>
                      </div>
                      <Badge variant="success" size="sm" rounded>
                        {job.matchScore}% match
                      </Badge>
                    </div>

                    <p className="text-neutral-600 mb-4 line-clamp-2">
                      {job.description}
                    </p>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <DollarSign className="w-4 h-4 mr-1 text-neutral-500" />
                        <span className="font-semibold text-neutral-900">{job.salary}</span>
                        <Badge variant="neutral" size="sm" className="ml-3">
                          {job.type}
                        </Badge>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {job.tags.map((tag) => (
                        <Badge key={tag} variant="neutral" size="sm">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <Button variant="outline" className="flex-1 group-hover:bg-primary-600 group-hover:text-white group-hover:border-primary-600 transition-all duration-300">
                        Ver Detalhes
                      </Button>
                      <Button className="flex-1">
                        Candidatar-se
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center mt-12">
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm">Anterior</Button>
                  <Button variant="outline" size="sm">1</Button>
                  <Button size="sm">2</Button>
                  <Button variant="outline" size="sm">3</Button>
                  <Button variant="outline" size="sm">4</Button>
                  <Button variant="outline" size="sm">Próximo</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

