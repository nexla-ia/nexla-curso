"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { InteractiveButton } from '@/components/ui/interactive-button';
import { AnimatedCard } from '@/components/ui/animated-card';
import { ScrollReveal } from '@/components/ui/scroll-reveal';
import { TypewriterText } from '@/components/ui/typewriter-text';
import { ParallaxSection } from '@/components/ui/parallax-section';
import { SuccessCarousel } from '@/components/ui/success-carousel';
import { BookOpen, Users, Award, PlayCircle, ArrowRight, Star, Clock, Brain, Cpu, Zap, Target, TrendingUp, Globe, Bot, Workflow, DollarSign, Lightbulb, Sparkles, Rocket } from 'lucide-react';

export default function HomePage() {
  const router = useRouter();
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsLoaded(true);
    
    // Mouse tracking for parallax effects
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const featuredCourses = [
    {
      id: 1,
      title: "IAs Populares na Prática",
      description: "Domine ChatGPT, Claude, Bard e outras IAs conversacionais para uso pessoal e profissional",
      instructor: "Prof. Ana Silva",
      duration: "25h",
      level: "Iniciante",
      rating: 4.9,
      students: 3247,
      thumbnail: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "IA Conversacional",
      price: "R$ 297",
      highlights: ["ChatGPT Avançado", "Prompts Eficazes", "Casos Práticos", "Certificado"]
    },
    {
      id: 2,
      title: "Geração de Imagens com IA",
      description: "Midjourney, DALL-E e outras ferramentas para criar imagens profissionais",
      instructor: "Carlos Santos",
      duration: "20h",
      level: "Iniciante",
      rating: 4.8,
      students: 2156,
      thumbnail: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "IA Visual",
      price: "R$ 247",
      highlights: ["Midjourney Pro", "DALL-E 3", "Prompts Visuais", "Portfolio"]
    },
    {
      id: 3,
      title: "Automação Completa com n8n",
      description: "Crie workflows automatizados e integre diferentes serviços sem programação",
      instructor: "Maria Oliveira",
      duration: "35h",
      level: "Intermediário",
      rating: 4.9,
      students: 1892,
      thumbnail: "https://images.pexels.com/photos/8386422/pexels-photo-8386422.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Automação",
      price: "R$ 497",
      highlights: ["n8n Completo", "APIs", "Workflows", "Projetos Reais"]
    }
  ];

  const stats = [
    { icon: Bot, label: "Ferramentas de IA", value: "17", color: "text-accent-primary" },
    { icon: Users, label: "Alunos Ativos", value: "8,547", color: "text-blue-400" },
    { icon: Workflow, label: "Automações Criadas", value: "2,341", color: "text-purple-400" },
    { icon: DollarSign, label: "Renda Extra Gerada", value: "R$ 1.2M", color: "text-green-400" }
  ];

  const features = [
    {
      icon: Brain,
      title: "IAs na Prática",
      description: "Aprenda a usar ChatGPT, Claude, Midjourney e outras IAs populares no dia a dia",
      color: "text-accent-primary"
    },
    {
      icon: Workflow,
      title: "Automação Sem Código",
      description: "Domine n8n e crie automações poderosas sem precisar programar",
      color: "text-blue-400"
    },
    {
      icon: DollarSign,
      title: "Renda Extra",
      description: "Transforme suas habilidades em IA em oportunidades de ganho financeiro",
      color: "text-green-400"
    },
    {
      icon: Lightbulb,
      title: "Projetos Reais",
      description: "Casos práticos do mercado para aplicar imediatamente o que aprender",
      color: "text-yellow-400"
    }
  ];

  const learningPath = [
    {
      step: "01",
      title: "Fundamentos de IA",
      description: "Entenda como funcionam as principais IAs e suas aplicações",
      duration: "Semana 1-2"
    },
    {
      step: "02", 
      title: "IAs Conversacionais",
      description: "Domine ChatGPT, Claude e Bard para tarefas do dia a dia",
      duration: "Semana 3-4"
    },
    {
      step: "03",
      title: "IA Visual",
      description: "Crie imagens profissionais com Midjourney e DALL-E",
      duration: "Semana 5-6"
    },
    {
      step: "04",
      title: "Automação com n8n",
      description: "Construa workflows automatizados para aumentar produtividade",
      duration: "Semana 7-10"
    },
    {
      step: "05",
      title: "Projetos Finais",
      description: "Desenvolva soluções completas e monte seu portfólio",
      duration: "Semana 11-12"
    }
  ];

  const typewriterTexts = [
    "IAs Mais Populares",
    "Automações Poderosas",
    "Renda Extra Garantida",
    "Produtividade Máxima"
  ];

  const handleGetStarted = () => {
    router.push('/auth/register');
  };

  const handleLogin = () => {
    router.push('/auth/login');
  };

  const handleExploreCourses = () => {
    router.push('/courses');
  };

  return (
    <div className={`min-h-screen ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}>
      {/* Navigation */}
      <nav className="nav-glass">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center animate-glow">
                <Bot className="w-6 h-6 text-dark-primary animated-icon" />
              </div>
              <div>
                <span className="text-2xl font-bold text-foreground">NEXLA</span>
                <span className="text-xs text-accent-primary ml-2 font-medium">IA & Automação</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" onClick={handleLogin} className="animated-link">
                Entrar
              </Button>
              <InteractiveButton onClick={handleGetStarted} glowEffect>
                Começar Agora
                <ArrowRight className="ml-2 w-4 h-4" />
              </InteractiveButton>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <ParallaxSection className="hero-section section-primary py-20 px-4 sm:px-6 lg:px-8">
        {/* Animated Background Particles */}
        <div className="particles-container">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${6 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>

        {/* Neural Network Background */}
        <div 
          className="neural-network absolute inset-0 opacity-30"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <ScrollReveal animation="slideUp" delay={200}>
              <Badge className="mb-6 bg-accent-primary/10 text-accent-primary border-accent-primary/20 px-4 py-2 micro-glow">
                <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
                Programa Completo de IA e Automação
              </Badge>
            </ScrollReveal>
            
            <ScrollReveal animation="fadeIn" delay={400}>
              <h1 className="font-bold text-foreground mb-6">
                Domine as
                <span className="neon-text block mt-2">
                  <TypewriterText texts={typewriterTexts} speed={150} />
                </span>
                <span className="text-muted-foreground block mt-2 text-2xl md:text-3xl">
                  e Transforme Seu Futuro
                </span>
              </h1>
            </ScrollReveal>
            
            <ScrollReveal animation="slideUp" delay={600}>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Aprenda ChatGPT, Claude, Midjourney, n8n e outras ferramentas para aumentar sua produtividade 
                e criar novas fontes de renda. <strong className="text-accent-primary">Sem necessidade de programação!</strong>
              </p>
            </ScrollReveal>
            
            <ScrollReveal animation="scaleIn" delay={800}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <InteractiveButton 
                  size="lg" 
                  onClick={handleGetStarted}
                  glowEffect
                  className="text-lg px-8 py-6"
                >
                  <Rocket className="mr-2 w-5 h-5" />
                  Começar Treinamento
                  <ArrowRight className="ml-2 w-5 h-5" />
                </InteractiveButton>
                <InteractiveButton 
                  size="lg" 
                  variant="secondary"
                  onClick={handleExploreCourses}
                  className="text-lg px-8 py-6"
                >
                  <PlayCircle className="mr-2 w-5 h-5" />
                  Ver Cursos
                </InteractiveButton>
              </div>
            </ScrollReveal>

            {/* Trust Indicators */}
            <ScrollReveal animation="fadeIn" delay={1000}>
              <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground">
                <div className="flex items-center micro-bounce">
                  <Star className="w-4 h-4 text-yellow-400 mr-1" />
                  <span>4.8/5 de satisfação</span>
                </div>
                <div className="flex items-center micro-bounce">
                  <Users className="w-4 h-4 text-blue-400 mr-1" />
                  <span>+8.547 alunos</span>
                </div>
                <div className="flex items-center micro-bounce">
                  <Award className="w-4 h-4 text-purple-400 mr-1" />
                  <span>Certificado reconhecido</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </ParallaxSection>

      {/* Stats Section */}
      <section className="section-secondary py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <ScrollReveal key={index} animation="slideUp" delay={index * 100}>
                <div className="text-center">
                  <AnimatedCard hoverEffect="scale" className="p-6 bg-transparent border-none shadow-none">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 animate-float">
                      <stat.icon className={`w-8 h-8 text-dark-primary`} />
                    </div>
                    <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                    <div className="text-muted-foreground">{stat.label}</div>
                  </AnimatedCard>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Path */}
      <section className="section-primary py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal animation="fadeIn">
            <div className="text-center mb-16">
              <h2 className="font-bold text-foreground mb-4">
                Sua Jornada de Aprendizado
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Um programa estruturado para levar você do zero ao domínio completo das principais IAs e automações
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-8">
            {learningPath.map((step, index) => (
              <ScrollReveal 
                key={index}
                animation={index % 2 === 0 ? "slideLeft" : "slideRight"}
                delay={index * 200}
              >
                <AnimatedCard hoverEffect="lift" magneticEffect className="p-0 overflow-hidden">
                  <div className="flex items-start space-x-6 p-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-dark-primary font-bold text-lg ai-glow">
                        {step.step}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                        <Badge variant="outline">{step.duration}</Badge>
                      </div>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                </AnimatedCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-secondary py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal animation="fadeIn">
            <div className="text-center mb-16">
              <h2 className="font-bold text-foreground mb-4">
                Por que Escolher Nosso Programa?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Metodologia prática focada em resultados reais para sua vida pessoal e profissional
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <ScrollReveal key={index} animation="scaleIn" delay={index * 150}>
                <AnimatedCard hoverEffect="glow" className="p-6 text-center">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mx-auto mb-4 animate-float`}>
                    <feature.icon className={`w-6 h-6 text-dark-primary`} />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </AnimatedCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="section-primary py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal animation="fadeIn">
            <div className="text-center mb-16">
              <h2 className="font-bold text-foreground mb-4">
                Cursos em Destaque
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Programas práticos desenvolvidos para você dominar as principais ferramentas de IA e automação
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course, index) => (
              <ScrollReveal key={course.id} animation="slideUp" delay={index * 200}>
                <AnimatedCard 
                  hoverEffect="lift"
                  parallaxEffect
                  className="course-card cursor-pointer overflow-hidden"
                  onClick={() => router.push(`/courses/${course.id}`)}
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={course.thumbnail} 
                      alt={course.title}
                      className="course-thumbnail w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="glass-effect">
                        {course.level}
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-gradient-primary text-dark-primary">
                        {course.category}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg text-foreground">{course.title}</CardTitle>
                    <CardDescription className="text-muted-foreground">{course.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                      <span>Por {course.instructor}</span>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {course.duration}
                      </div>
                    </div>
                    
                    {/* Course Highlights */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {course.highlights.map((highlight, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                        <span className="font-medium text-foreground">{course.rating}</span>
                        <span className="text-muted-foreground ml-1">({course.students})</span>
                      </div>
                      <div className="text-xl font-bold text-accent-primary">
                        {course.price}
                      </div>
                    </div>
                    <InteractiveButton className="w-full" rippleEffect>
                      Ver Curso
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </InteractiveButton>
                  </CardContent>
                </AnimatedCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories - Carrossel Automático */}
      <section className="section-secondary py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal animation="fadeIn">
            <div className="text-center mb-16">
              <h2 className="font-bold text-foreground mb-4">
                Histórias de Sucesso
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Veja como nossos alunos transformaram suas carreiras e criaram novas fontes de renda com IA e automação
              </p>
            </div>
          </ScrollReveal>

          <SuccessCarousel />
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-primary py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-primary opacity-10"></div>
        <div className="data-stream absolute inset-0"></div>
        
        <ScrollReveal animation="fadeIn">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="font-bold text-foreground mb-6">
              Pronto para Dominar IA e Automação?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Junte-se a milhares de pessoas que já transformaram suas vidas com nosso programa completo. 
              <strong className="text-accent-primary"> Sem necessidade de conhecimento técnico!</strong>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <InteractiveButton 
                size="lg" 
                onClick={handleGetStarted}
                glowEffect
                className="text-lg px-8 py-6"
              >
                <Bot className="mr-2 w-5 h-5" />
                Começar Agora - Acesso Imediato
                <ArrowRight className="ml-2 w-5 h-5" />
              </InteractiveButton>
              <InteractiveButton 
                size="lg" 
                variant="secondary"
                className="text-lg px-8 py-6"
              >
                <PlayCircle className="mr-2 w-5 h-5" />
                Assistir Demonstração
              </InteractiveButton>
            </div>
            
            <div className="mt-8 text-sm text-muted-foreground">
              ✅ Acesso vitalício • ✅ Certificado incluso • ✅ Suporte 24/7 • ✅ Garantia de 30 dias
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* Footer */}
      <footer className="section-secondary border-t border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center animate-glow">
                <Bot className="w-6 h-6 text-dark-primary" />
              </div>
              <div>
                <span className="text-2xl font-bold text-foreground">NEXLA</span>
                <span className="text-sm text-accent-primary ml-2">IA & Automação</span>
              </div>
            </div>
            <p className="text-muted-foreground">
              © 2024 NEXLA. Todos os direitos reservados. Transformando vidas através da Inteligência Artificial e Automação.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}