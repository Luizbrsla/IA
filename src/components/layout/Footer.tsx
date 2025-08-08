import React from 'react';
import Link from 'next/link';
import { Heart, Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Para Candidatos',
      links: [
        { name: 'Buscar Vagas', href: '/vagas' },
        { name: 'Criar Perfil', href: '/candidato/cadastro' },
        { name: 'Dicas de Carreira', href: '/blog/carreira' },
        { name: 'Simulador de Entrevistas', href: '/simulador' },
      ],
    },
    {
      title: 'Para Empresas',
      links: [
        { name: 'Publicar Vagas', href: '/empresa/vagas' },
        { name: 'Planos', href: '/empresa/planos' },
        { name: 'Encontrar Talentos', href: '/empresa/talentos' },
        { name: 'Analytics', href: '/empresa/analytics' },
      ],
    },
    {
      title: 'Recursos',
      links: [
        { name: 'Blog', href: '/blog' },
        { name: 'Guia Salarial', href: '/salarios' },
        { name: 'Cursos', href: '/cursos' },
        { name: 'API', href: '/api/docs' },
      ],
    },
    {
      title: 'Suporte',
      links: [
        { name: 'Central de Ajuda', href: '/ajuda' },
        { name: 'Contato', href: '/contato' },
        { name: 'Política de Privacidade', href: '/privacidade' },
        { name: 'Termos de Uso', href: '/termos' },
      ],
    },
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: '#', icon: Linkedin },
    { name: 'Twitter', href: '#', icon: Twitter },
    { name: 'Instagram', href: '#', icon: Instagram },
  ];

  return (
    <footer className="bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">E+</span>
              </div>
              <span className="text-xl font-bold">Emprego+</span>
            </div>
            <p className="text-neutral-400 text-sm mb-6 leading-relaxed">
              A plataforma nacional de empregos que conecta talentos e oportunidades com inteligência artificial e design centrado no usuário.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 text-sm text-neutral-400">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>contato@empregoplus.com.br</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>(11) 9999-9999</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>São Paulo, SP - Brasil</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-white mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-neutral-400 hover:text-white transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-neutral-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-1 text-sm text-neutral-400">
              <span>© {currentYear} Emprego+. Feito com</span>
              <Heart className="w-4 h-4 text-error-500 fill-current" />
              <span>no Brasil.</span>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="text-neutral-400 hover:text-white transition-colors duration-300"
                    aria-label={social.name}
                  >
                    <Icon className="w-5 h-5" />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

