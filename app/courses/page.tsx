"use client";

import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  BookOpen, 
  Search, 
  Filter, 
  Star, 
  Clock, 
  Users, 
  PlayCircle,
  ArrowRight,
  Bot,
  Workflow,
  Image,
  MessageSquare,
  Zap,
  Target
} from 'lucide-react';

export default function CoursesPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const courses = [
    {
      id: 1,
      title: "ChatGPT e IAs Conversacionais",
      description: "Domine ChatGPT, Claude, Bard e outras IAs para uso pessoal e profissional",
      instructor: "Ana Silva",
      duration: "25h",
      level: "Iniciante",
      rating: 4.9,
      students: 3248,
      price: "R$ 297",
      thumbnail: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "IA Conversacional",
      highlights: ["Prompts Avançados", "Casos Práticos", "Automação de Textos", "Produtividade"],
      modules: 8,
      projects: 15
    },
    {
      id: 2,
      title: "Midjourney e DALL-E Completo",
      description: "Crie imagens profissionais com as principais IAs de geração visual",
      instructor: "Carlos Santos",
      duration: "20h",
      level: "Iniciante",
      rating: 4.8,
      students: 2156,
      price: "R$ 247",
      thumbnail: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "IA Visual",
      highlights: ["Midjourney Pro", "DALL-E 3", "Prompts Visuais", "Portfolio Profissional"],
      modules: 6,
      projects: 12
    },
    {
      id: 3,
      title: "Automação Completa com n8n",
      description: "Crie workflows automatizados poderosos sem programação",
      instructor: "Maria Oliveira",
      duration: "35h",
      level: "Intermediário",
      rating: 4.9,
      students: 1892,
      price: "R$ 497",
      thumbnail: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Automação",
      highlights: ["n8n Avançado", "Integração APIs", "Workflows Complexos", "Projetos Reais"],
      modules: 12,
      projects: 20
    },
    {
      id: 4,
      title: "IA para Produtividade Pessoal",
      description: "Otimize sua rotina com ferramentas de IA para organização e eficiência",
      instructor: "João Costa",
      duration: "18h",
      level: "Iniciante",
      rating: 4.7,
      students: 1654,
      price: "R$ 197",
      thumbnail: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Produtividade",
      highlights: ["Notion AI", "Calendly", "Zapier", "Rotinas Automatizadas"],
      modules: 5,
      projects: 10
    },
    {
      id: 5,
      title: "IA para Criação de Conteúdo",
      description: "Produza conteúdo de qualidade usando ferramentas de IA",
      instructor: "Pedro Silva",
      duration: "22h",
      level: "Iniciante",
      rating: 4.8,
      students: 2341,
      price: "R$ 297",
      thumbnail: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Criação de Conteúdo",
      highlights: ["Copy.ai", "Jasper", "Canva AI", "Estratégias de Conteúdo"],
      modules: 7,
      projects: 18
    },
    {
      id: 6,
      title: "Renda Extra com IA",
      description: "Monetize suas habilidades em IA e crie fontes de renda passiva",
      instructor: "Laura Mendes",
      duration: "28h",
      level: "Intermediário",
      rating: 4.9,
      students: 1567,
      price: "R$ 397",
      thumbnail: "https://images.pexels.com/photos/606541/pexels-photo-606541.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Monetização",
      highlights: ["Freelancing", "Produtos Digitais", "Consultoria", "Casos de Sucesso"],
      modules: 9,
      projects: 15
    },
    {
      id: 7,
      title: "IA para E-commerce",
      description: "Automatize e otimize sua loja online com ferramentas de IA",
      instructor: "Roberto Lima",
      duration: "24h",
      level: "Intermediário",
      rating: 4.6,
      students: 987,
      price: "R$ 347",
      thumbnail: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "E-commerce",
      highlights: ["Chatbots", "Descrições Automáticas", "Análise de Dados", "Conversão"],
      modules: 8,
      projects: 12
    },
    {
      id: 8,
      title: "IA para Redes Sociais",
      description: "Automatize e potencialize sua presença nas redes sociais",
      instructor: "Camila Torres",
      duration: "20h",
      level: "Iniciante",
      rating: 4.7,
      students: 1876,
      price: "R$ 247",
      thumbnail: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Marketing Digital",
      highlights: ["Buffer AI", "Hootsuite", "Conteúdo Automatizado", "Engajamento"],
      modules: 6,
      projects: 14
    }
  ];

  const categories = [
    { name: "Todos", icon: Target },
    { name: "IA Conversacional", icon: MessageSquare },
    { name: "IA Visual", icon: Image },
    { name: "Automação", icon: Workflow },
    { name: "Produtividade", icon: Zap },
    { name: "Criação de Conteúdo", icon: BookOpen },
    { name: "Monetização", icon: Target },
    { name: "E-commerce", icon: Bot },
    { name: "Marketing Digital", icon: Users }
  ];
  
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "Todos" || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className={`min-h-screen bg-gradient-to-br from-background via-primary/5 to-accent/5 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}>
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-border/50 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-foreground">NEXLA</span>
              <span className="text-xs text-accent-primary">IA & Automação</span>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost">
                Entrar
              </Button>
              <Button className="bg-gradient-primary hover:opacity-90">
                Começar Agora
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Catálogo de Cursos
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Programas práticos para dominar IA e automação, do básico ao avançado
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Buscar cursos de IA e automação..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline" className="flex items-center">
              <Filter className="w-4 h-4 mr-2" />
              Filtros
            </Button>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category.name}
                variant={selectedCategory === category.name ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.name)}
                className={`flex items-center ${selectedCategory === category.name ? "bg-gradient-primary hover:opacity-90" : ""}`}
              >
                <category.icon className="w-4 h-4 mr-1" />
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            {filteredCourses.length} curso{filteredCourses.length !== 1 ? 's' : ''} encontrado{filteredCourses.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course, index) => (
            <Card 
              key={course.id} 
              className="course-card cursor-pointer animate-slide-up"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="relative">
                <img 
                  src={course.thumbnail} 
                  alt={course.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-white/90">
                    {course.level}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge className="bg-gradient-primary text-dark-primary">
                    {course.category}
                  </Badge>
                </div>
                <div className="absolute bottom-4 left-4 flex space-x-2">
                  <Badge variant="outline" className="bg-black/50 text-white border-white/20">
                    {course.modules} módulos
                  </Badge>
                  <Badge variant="outline" className="bg-black/50 text-white border-white/20">
                    {course.projects} projetos
                  </Badge>
                </div>
              </div>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-2">{course.title}</CardTitle>
                    <CardDescription className="text-sm">
                      {course.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>Por {course.instructor}</span>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {course.duration}
                    </div>
                  </div>
                  
                  {/* Course Highlights */}
                  <div className="flex flex-wrap gap-1">
                    {course.highlights.slice(0, 3).map((highlight, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {highlight}
                      </Badge>
                    ))}
                    {course.highlights.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{course.highlights.length - 3}
                      </Badge>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-500 fill-current mr-1" />
                        <span className="font-medium text-sm">{course.rating}</span>
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Users className="w-4 h-4 mr-1" />
                        <span className="text-sm">{course.students}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div className="text-2xl font-bold text-foreground">
                      {course.price}
                    </div>
                    <Button size="sm" className="bg-gradient-primary hover:opacity-90">
                      Ver Curso
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <Bot className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Nenhum curso encontrado
            </h3>
            <p className="text-muted-foreground">
              Tente ajustar seus filtros ou termo de busca
            </p>
          </div>
        )}

        {/* Learning Path CTA */}
        <div className="mt-16 bg-gradient-primary rounded-2xl p-8 text-dark-primary">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">
              Não sabe por onde começar?
            </h2>
            <p className="text-xl mb-6 opacity-90">
              Siga nossa trilha de aprendizado estruturada para dominar IA e automação
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-dark-primary hover:bg-gray-100">
                <Target className="w-5 h-5 mr-2" />
                Ver Trilha Completa
              </Button>
              <Button size="lg" variant="outline" className="border-dark-primary text-dark-primary hover:bg-dark-primary hover:text-white">
                <PlayCircle className="w-5 h-5 mr-2" />
                Assistir Demonstração
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}