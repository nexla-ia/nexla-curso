"use client";

import { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, TrendingUp, DollarSign, Clock, Zap } from 'lucide-react';

interface SuccessStory {
  id: number;
  name: string;
  role: string;
  result: string;
  story: string;
  avatar?: string;
  rating: number;
  timeframe: string;
  category: string;
  icon: any;
}

const successStories: SuccessStory[] = [
  {
    id: 1,
    name: "João Silva",
    role: "Freelancer",
    result: "Aumentou produtividade em 287%",
    story: "Com as automações do n8n, consigo entregar 3x mais projetos no mesmo tempo.",
    rating: 5,
    timeframe: "Em 2 meses",
    category: "Produtividade",
    icon: TrendingUp
  },
  {
    id: 2,
    name: "Maria Santos",
    role: "Designer",
    result: "R$ 4.850/mês extra",
    story: "Usando Midjourney, criei um negócio de criação de logos e artes digitais.",
    rating: 5,
    timeframe: "Em 3 meses",
    category: "Renda Extra",
    icon: DollarSign
  },
  {
    id: 3,
    name: "Pedro Costa",
    role: "Consultor",
    result: "Economiza 18h/semana",
    story: "ChatGPT revolucionou minha forma de trabalhar. Automatizei relatórios e apresentações.",
    rating: 5,
    timeframe: "Em 1 mês",
    category: "Automação",
    icon: Clock
  },
  {
    id: 4,
    name: "Ana Oliveira",
    role: "Empreendedora",
    result: "Vendas aumentaram 340%",
    story: "Automatizei todo meu funil de vendas com IA. Agora vendo enquanto durmo!",
    rating: 5,
    timeframe: "Em 4 meses",
    category: "Vendas",
    icon: TrendingUp
  },
  {
    id: 5,
    name: "Carlos Mendes",
    role: "Criador de Conteúdo",
    result: "R$ 12.300/mês com IA",
    story: "Criei um curso sobre IA e agora tenho renda passiva mensal de 5 dígitos.",
    rating: 5,
    timeframe: "Em 6 meses",
    category: "Educação",
    icon: DollarSign
  },
  {
    id: 6,
    name: "Lucia Torres",
    role: "Arquiteta",
    result: "Projetos 5x mais rápidos",
    story: "IA me ajuda a criar plantas e renderizações em minutos ao invés de horas.",
    rating: 5,
    timeframe: "Em 2 meses",
    category: "Design",
    icon: Zap
  },
  {
    id: 7,
    name: "Roberto Lima",
    role: "E-commerce",
    result: "Conversão subiu 180%",
    story: "Chatbots inteligentes atendem meus clientes 24/7 e vendem automaticamente.",
    rating: 5,
    timeframe: "Em 3 meses",
    category: "Vendas",
    icon: TrendingUp
  },
  {
    id: 8,
    name: "Fernanda Reis",
    role: "Copywriter",
    result: "R$ 8.200/mês freelancing",
    story: "Com IA, produzo textos de alta qualidade 10x mais rápido que antes.",
    rating: 5,
    timeframe: "Em 2 meses",
    category: "Escrita",
    icon: DollarSign
  },
  {
    id: 9,
    name: "Marcos Alves",
    role: "Agência Digital",
    result: "Equipe 70% mais eficiente",
    story: "Automatizei processos internos e agora minha equipe foca no que realmente importa.",
    rating: 5,
    timeframe: "Em 4 meses",
    category: "Gestão",
    icon: Zap
  },
  {
    id: 10,
    name: "Camila Souza",
    role: "Influencer",
    result: "Engajamento +450%",
    story: "IA me ajuda a criar conteúdo viral e gerenciar todas as redes sociais.",
    rating: 5,
    timeframe: "Em 1 mês",
    category: "Social Media",
    icon: TrendingUp
  }
];

export function SuccessCarousel() {
  const [visibleStories, setVisibleStories] = useState<SuccessStory[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Inicializa com as primeiras 3 histórias
    setVisibleStories(successStories.slice(0, 3));

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % successStories.length;
        
        // Atualiza as histórias visíveis com animação
        setTimeout(() => {
          const newVisibleStories = [
            successStories[nextIndex],
            successStories[(nextIndex + 1) % successStories.length],
            successStories[(nextIndex + 2) % successStories.length]
          ];
          setVisibleStories(newVisibleStories);
        }, 300);

        return nextIndex;
      });
    }, 4000); // Muda a cada 4 segundos

    return () => clearInterval(interval);
  }, []);

  const getCategoryColor = (category: string) => {
    const colors = {
      'Produtividade': 'bg-blue-500/10 text-blue-400 border-blue-500/20',
      'Renda Extra': 'bg-green-500/10 text-green-400 border-green-500/20',
      'Automação': 'bg-purple-500/10 text-purple-400 border-purple-500/20',
      'Vendas': 'bg-orange-500/10 text-orange-400 border-orange-500/20',
      'Educação': 'bg-pink-500/10 text-pink-400 border-pink-500/20',
      'Design': 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
      'Escrita': 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
      'Gestão': 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
      'Social Media': 'bg-red-500/10 text-red-400 border-red-500/20'
    };
    return colors[category as keyof typeof colors] || 'bg-gray-500/10 text-gray-400 border-gray-500/20';
  };

  return (
    <div className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-accent-primary/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${4 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        <div className="grid md:grid-cols-3 gap-8 min-h-[400px]">
          {visibleStories.map((story, index) => (
            <div
              key={`${story.id}-${currentIndex}`}
              className="success-story-card"
              style={{
                animationDelay: `${index * 0.2}s`
              }}
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2 group">
                <CardContent className="p-6 h-full flex flex-col">
                  {/* Header com avatar e info */}
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="relative">
                      <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center animate-glow group-hover:scale-110 transition-transform duration-300">
                        <span className="text-dark-primary font-bold text-lg">
                          {story.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-primary rounded-full flex items-center justify-center">
                        <story.icon className="w-3 h-3 text-dark-primary" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {story.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">{story.role}</p>
                      <div className="flex items-center mt-1">
                        {[...Array(story.rating)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Resultado destacado */}
                  <div className="mb-4">
                    <Badge className={`${getCategoryColor(story.category)} micro-glow mb-2`}>
                      {story.result}
                    </Badge>
                    <Badge variant="outline" className="ml-2 text-xs">
                      {story.timeframe}
                    </Badge>
                  </div>

                  {/* Depoimento */}
                  <div className="flex-1 flex flex-col justify-between">
                    <blockquote className="text-muted-foreground italic text-sm leading-relaxed mb-4 group-hover:text-foreground transition-colors">
                      "{story.story}"
                    </blockquote>
                    
                    {/* Categoria */}
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary" className="text-xs">
                        {story.category}
                      </Badge>
                      <div className="flex items-center text-xs text-muted-foreground">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        Verificado
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Indicadores de progresso */}
        <div className="flex justify-center mt-8 space-x-2">
          {successStories.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-primary w-8'
                  : index === (currentIndex + 1) % successStories.length ||
                    index === (currentIndex + 2) % successStories.length
                  ? 'bg-primary/50'
                  : 'bg-muted'
              }`}
            />
          ))}
        </div>

        {/* Contador de histórias */}
        <div className="text-center mt-4">
          <p className="text-sm text-muted-foreground">
            <span className="text-primary font-medium">{successStories.length}+</span> histórias de sucesso reais
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInFromRight {
          0% {
            opacity: 0;
            transform: translateX(100px) scale(0.9);
          }
          100% {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
        }

        @keyframes slideOutToLeft {
          0% {
            opacity: 1;
            transform: translateX(0) scale(1);
          }
          100% {
            opacity: 0;
            transform: translateX(-100px) scale(0.9);
          }
        }

        .success-story-card {
          animation: slideInFromRight 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        .success-story-card:nth-child(1) {
          animation-delay: 0s;
        }

        .success-story-card:nth-child(2) {
          animation-delay: 0.2s;
        }

        .success-story-card:nth-child(3) {
          animation-delay: 0.4s;
        }
      `}</style>
    </div>
  );
}