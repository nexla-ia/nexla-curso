"use client";

import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  BookOpen, 
  PlayCircle, 
  Award, 
  Clock, 
  TrendingUp, 
  Calendar,
  Star,
  ChevronRight,
  Users,
  Target,
  Bot,
  Workflow,
  Image,
  MessageSquare,
  Zap
} from 'lucide-react';
import { StudentLayout } from '@/components/layouts/student-layout';

export default function StudentDashboard() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Pequeno delay para garantir que tudo carregue
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const mockData = {
    student: {
      name: "Maria Silva",
      email: "maria@email.com",
      avatar: null,
      joinedAt: "2024-01-15",
      level: "Intermediário"
    },
    stats: {
      coursesEnrolled: 4,
      coursesCompleted: 2,
      hoursWatched: 67,
      certificatesEarned: 2,
      automationsCreated: 8,
      aiToolsMastered: 6
    },
    currentCourses: [
      {
        id: 1,
        title: "ChatGPT e IAs Conversacionais",
        instructor: "Ana Silva",
        progress: 75,
        thumbnail: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400",
        nextLesson: "Prompts Avançados para Negócios",
        timeLeft: "3h 20min",
        lastAccessed: "Há 1 dia",
        category: "IA Conversacional",
        icon: MessageSquare
      },
      {
        id: 2,
        title: "Midjourney e DALL-E Completo",
        instructor: "Carlos Santos",
        progress: 45,
        thumbnail: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400",
        nextLesson: "Criando Logos Profissionais",
        timeLeft: "8h 30min",
        lastAccessed: "Há 3 dias",
        category: "IA Visual",
        icon: Image
      },
      {
        id: 3,
        title: "Automação Completa com n8n",
        instructor: "Maria Oliveira",
        progress: 30,
        thumbnail: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=400",
        nextLesson: "Integrando APIs Externas",
        timeLeft: "12h 45min",
        lastAccessed: "Há 1 semana",
        category: "Automação",
        icon: Workflow
      },
      {
        id: 4,
        title: "IA para Produtividade Pessoal",
        instructor: "João Costa",
        progress: 90,
        thumbnail: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=400",
        nextLesson: "Projeto Final - Assistente Pessoal",
        timeLeft: "1h 15min",
        lastAccessed: "Ontem",
        category: "Produtividade",
        icon: Zap
      }
    ],
    recentAchievements: [
      {
        id: 1,
        title: "Mestre do ChatGPT",
        description: "Completou o curso de IAs Conversacionais",
        date: "2024-03-15",
        icon: MessageSquare,
        color: "text-blue-500"
      },
      {
        id: 2,
        title: "Criador Visual",
        description: "Criou 50 imagens com Midjourney",
        date: "2024-03-10",
        icon: Image,
        color: "text-purple-500"
      },
      {
        id: 3,
        title: "Automatizador",
        description: "Criou sua primeira automação com n8n",
        date: "2024-03-05",
        icon: Workflow,
        color: "text-green-500"
      }
    ],
    upcomingDeadlines: [
      {
        id: 1,
        course: "Automação Completa com n8n",
        task: "Projeto: E-commerce Automatizado",
        dueDate: "2024-04-01",
        priority: "high"
      },
      {
        id: 2,
        course: "IA para Produtividade Pessoal",
        task: "Entrega Final: Assistente IA",
        dueDate: "2024-04-03",
        priority: "medium"
      }
    ],
    weeklyGoals: [
      { task: "Completar 3 lições de n8n", completed: true },
      { task: "Criar 5 imagens no Midjourney", completed: true },
      { task: "Praticar prompts avançados", completed: false },
      { task: "Finalizar projeto de automação", completed: false }
    ]
  };

  const statsCards = [
    {
      title: "Cursos Matriculados",
      value: mockData.stats.coursesEnrolled,
      icon: BookOpen,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      change: "+1 este mês"
    },
    {
      title: "Horas de Estudo",
      value: `${mockData.stats.hoursWatched}h`,
      icon: Clock,
      color: "text-green-600",
      bgColor: "bg-green-50",
      change: "+19h esta semana"
    },
    {
      title: "Automações Criadas",
      value: mockData.stats.automationsCreated,
      icon: Workflow,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      change: "+3 este mês"
    },
    {
      title: "Ferramentas IA",
      value: mockData.stats.aiToolsMastered,
      icon: Bot,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      change: "+2 dominadas"
    }
  ];

  return (
    <StudentLayout>
      <div className={`space-y-8 transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        {/* Welcome Section */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">
              Olá, {mockData.student.name}! 🚀
            </h1>
            <p className="text-muted-foreground mt-1">
              Continue dominando IA e automação
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <Badge variant="secondary" className="px-3 py-1">
              <Target className="w-4 h-4 mr-1" />
              {mockData.student.level}
            </Badge>
            <Avatar className="w-12 h-12">
              <AvatarImage src={mockData.student.avatar} />
              <AvatarFallback className="bg-gradient-primary text-white">
                {mockData.student.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="stats-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsCards.map((card, index) => (
            <Card 
              key={index} 
              className="stats-card dashboard-card"
              style={{
                animationDelay: `${index * 0.1}s`,
                opacity: 1,
                visibility: 'visible'
              }}
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      {card.title}
                    </p>
                    <p className="text-2xl font-bold text-foreground">
                      {card.value}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {card.change}
                    </p>
                  </div>
                  <div className={`w-12 h-12 rounded-lg ${card.bgColor} flex items-center justify-center`}>
                    <card.icon className={`w-6 h-6 ${card.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Weekly Goals */}
        <Card className="dashboard-loading">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Target className="w-5 h-5 mr-2" />
              Metas da Semana
            </CardTitle>
            <CardDescription>
              Acompanhe seu progresso semanal
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {mockData.weeklyGoals.map((goal, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                    goal.completed 
                      ? 'bg-green-500 border-green-500' 
                      : 'border-muted-foreground'
                  }`}>
                    {goal.completed && (
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    )}
                  </div>
                  <span className={`${goal.completed ? 'line-through text-muted-foreground' : 'text-foreground'}`}>
                    {goal.task}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Progresso da semana</span>
                <span className="font-medium">2/4 concluídas</span>
              </div>
              <Progress value={50} className="mt-2" />
            </div>
          </CardContent>
        </Card>

        {/* Main Content */}
        <Tabs defaultValue="courses" className="w-full dashboard-loading">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="courses">Meus Cursos</TabsTrigger>
            <TabsTrigger value="progress">Progresso</TabsTrigger>
            <TabsTrigger value="achievements">Conquistas</TabsTrigger>
          </TabsList>

          <TabsContent value="courses" className="space-y-6">
            <div className="grid gap-6">
              {mockData.currentCourses.map((course, index) => (
                <Card key={course.id} className="course-card animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <img 
                        src={course.thumbnail} 
                        alt={course.title}
                        className="w-24 h-16 rounded-lg object-cover flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <div className="flex items-center mb-1">
                              <course.icon className="w-4 h-4 mr-2 text-accent-primary" />
                              <Badge variant="outline" className="text-xs">
                                {course.category}
                              </Badge>
                            </div>
                            <h3 className="font-semibold text-foreground mb-1">
                              {course.title}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              Por {course.instructor}
                            </p>
                          </div>
                          <Badge variant="outline" className="ml-2">
                            {course.progress}% completo
                          </Badge>
                        </div>
                        
                        <div className="space-y-3">
                          <Progress value={course.progress} className="h-2" />
                          
                          <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center text-muted-foreground">
                              <PlayCircle className="w-4 h-4 mr-1" />
                              Próxima: {course.nextLesson}
                            </div>
                            <div className="flex items-center text-muted-foreground">
                              <Clock className="w-4 h-4 mr-1" />
                              {course.timeLeft} restantes
                            </div>
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-muted-foreground">
                              Último acesso: {course.lastAccessed}
                            </span>
                            <Button size="sm" className="bg-gradient-primary hover:opacity-90">
                              Continuar
                              <ChevronRight className="w-4 h-4 ml-1" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="progress" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2" />
                    Progresso Semanal
                  </CardTitle>
                  <CardDescription>
                    Suas horas de estudo nos últimos 7 dias
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'].map((day, index) => {
                      const hours = [3.2, 2.7, 4.1, 1.3, 3.8, 5.2, 2.4][index];
                      return (
                        <div key={day} className="flex items-center justify-between">
                          <span className="text-sm font-medium">{day}</span>
                          <div className="flex items-center space-x-2">
                            <Progress value={hours * 20} className="w-20 h-2" />
                            <span className="text-sm text-muted-foreground w-8">
                              {hours}h
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calendar className="w-5 h-5 mr-2" />
                    Próximos Prazos
                  </CardTitle>
                  <CardDescription>
                    Projetos e atividades com data de entrega
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mockData.upcomingDeadlines.map((deadline) => (
                      <div key={deadline.id} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                        <div>
                          <p className="font-medium text-sm">{deadline.task}</p>
                          <p className="text-xs text-muted-foreground">{deadline.course}</p>
                        </div>
                        <div className="text-right">
                          <Badge 
                            variant={deadline.priority === 'high' ? 'destructive' : 'secondary'}
                            className="mb-1"
                          >
                            {deadline.dueDate}
                          </Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="achievements" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockData.recentAchievements.map((achievement, index) => (
                <Card key={achievement.id} className="animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                        <achievement.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">
                          {achievement.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          {achievement.description}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Conquistado em {new Date(achievement.date).toLocaleDateString('pt-BR')}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </StudentLayout>
  );
}