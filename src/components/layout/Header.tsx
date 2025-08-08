'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Search, User, Briefcase, Building2 } from 'lucide-react';
import Button from '@/components/ui/Button';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Vagas', href: '/vagas', icon: Briefcase },
    { name: 'Empresas', href: '/empresas', icon: Building2 },
    { name: 'Sobre', href: '/sobre', icon: null },
  ];

  return (
    <header className="bg-white border-b border-neutral-200 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <span className="text-white font-bold text-lg">E+</span>
              </div>
              <span className="text-xl font-bold text-neutral-900 group-hover:text-primary-600 transition-colors duration-300">
                Emprego+
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-1 text-neutral-600 hover:text-primary-600 transition-colors duration-300 group"
                >
                  {Icon && <Icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />}
                  <span className="font-medium">{item.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <User className="w-4 h-4 mr-2" />
              Entrar
            </Button>
            <Button size="sm">
              Cadastrar-se
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-neutral-600 hover:text-primary-600 hover:bg-neutral-100 transition-all duration-300"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            'md:hidden transition-all duration-300 ease-in-out overflow-hidden',
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          )}
        >
          <div className="py-4 space-y-4 border-t border-neutral-200">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-3 px-4 py-2 text-neutral-600 hover:text-primary-600 hover:bg-neutral-50 rounded-lg transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {Icon && <Icon className="w-5 h-5" />}
                  <span className="font-medium">{item.name}</span>
                </Link>
              );
            })}
            <div className="px-4 pt-4 space-y-3 border-t border-neutral-200">
              <Button variant="ghost" size="sm" className="w-full justify-start">
                <User className="w-4 h-4 mr-2" />
                Entrar
              </Button>
              <Button size="sm" className="w-full">
                Cadastrar-se
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

