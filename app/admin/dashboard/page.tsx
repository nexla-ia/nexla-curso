"use client";

import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Users, 
  BookOpen, 
  Award, 
  TrendingUp, 
  Plus,
  MoreHorizontal,
  Calendar,
  DollarSign,
  Activity,
  UserCheck,
  AlertCircle,
  Bot,
  Workflow,
  MessageSquare,
  Image
} from 'lucide-react';
import { AdminLayout } from '@/components/layouts/admin-layout';
import { OverviewChart } from '@/components/charts/overview-chart';
import { RecentActivity } from '@/components/admin/recent-activity';

export default function AdminDashboard() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Pequeno delay para garantir que tudo carregue
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const mockData = {
    stats: {
      totalUsers: 8547,
      totalCourses: 8,
      totalRevenue: 485200,
      activeUsers: 6392,
      coursesCompleted: 3584,
      certificatesIssued: 2429,
      automationsCreated: 2341,
      aiToolsUsed: 17
    },
    recentMetrics: {
      usersGrowth: +18.5,
      revenueGrowth: +24.2,
      courseCompletionRate: 78.4,
      userEngagement: +22.3
    }
  };

  const statsCards = [
    {
      title: "Total de Alunos",
      value: mockData.stats.totalUsers.toLocaleString(),
      icon: Users,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      change: `+${mockData.recentMetrics.usersGrowth}%`,
      changeType: "increase"
    },
    {
      title: "Cursos Ativos",
      value: mockData.stats.totalCourses,
      icon: BookOpen,
      color: "text-green-600",
      bgColor: "bg-green-50",
      change: "+2 este mês",
      changeType: "increase"
    },
    {
      title: "Receita Total",
      value: `R$ ${mockData.stats.totalRevenue.toLocaleString()}`,
      icon: DollarSign,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      change: `+${mockData.recentMetrics.revenueGrowth}%`,
      changeType: "increase"
    },
    {
      title: "Alunos Ativos",
      value: mockData.stats.activeUsers.toLocaleString(),
      icon: Activity,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      change: `+${mockData.recentMetrics.userEngagement}%`,
      changeType: "increase"
    },
    {
      title: "Cursos Concluídos",
      value: mockData.stats.coursesCompleted.toLocaleString(),
      icon: Award,
      color: "text-indigo-600",
      bgColor: "bg-indigo-50",
      change: `${mockData.recentMetrics.courseCompletionRate}% taxa`,
      changeType: "neutral"
    },
    {
      title: "Automações Criadas",
      value: mockData.stats.automationsCreated.toLocaleString(),
      icon: Workflow,
      color: "text-pink-600",
      bgColor: "bg-pink-50",
      change: "+156 esta semana",
      changeType: "increase"
    }
  ];

  const quickActions = [
    {
      title: "Criar Novo Curso",
      description: "Adicionar curso de IA ou automação",
      icon: Bot,
      action: "create-course",
      color: "bg-blue-500"
    },
    {
      title: "Gerenciar Alunos",
      description: "Visualizar e gerenciar contas",
      icon: Users,
      action: "manage-users",
      color: "bg-green-500"
    },
    {
      title: "Relatórios IA",
      description: "Analytics de uso de ferramentas",
      icon: TrendingUp,
      action: "view-reports",
      color: "bg-purple-500"
    },
    {
      title: "Configurações",
      description: "Sistema e notificações",
      icon: AlertCircle,
      action: "settings",
      color: "bg-orange-500"
    }
  ];

  const courseCategories = [
    {
      name: "IA Conversacional",
      icon: MessageSquare,
      courses: 2,
      students: 4892,
      color: "text-blue-500"
    },
    {
      name: "IA Visual",
      icon: Image,
      courses: 2,
      students: 3156,
      color: "text-purple-500"
    },
    {
      name: "Automação",
      icon: Workflow,
      courses: 2,
      students: 2341,
      color: "text-green-500"
    },
    {
      name: "Produtividade",
      icon: Activity,
      courses: 2,
      students: 1892,
      color: "text-orange-500"
    }
  ];

  return (
    <AdminLayout>
      <div className={`space-y-8 transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">
              Dashboard - IA & Automação
            </h1>
            <p className="text-muted-foreground mt-1">
              Visão geral da plataforma de treinamento
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <Button variant="outline">
              <Calendar className="w-4 h-4 mr-2" />
              Último mês
            </Button>
            <Button className="bg-gradient-primary hover:opacity-90">
              <Plus className="w-4 h-4 mr-2" />
              Novo Curso IA
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="stats-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                    <p className={`text-xs mt-1 ${
                      card.changeType === 'increase' ? 'text-green-600' : 
                      card.changeType === 'decrease' ? 'text-red-600' : 
                      'text-muted-foreground'
                    }`}>
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

        {/* Course Categories Overview */}
        <Card className="dashboard-loading">
          <CardHeader>
            <CardTitle>Categorias de Cursos</CardTitle>
            <CardDescription>
              Performance por categoria de IA e automação
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {courseCategories.map((category, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                    <category.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-foreground">
                      {category.name}
                    </h3>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <span>{category.courses} cursos</span>
                      <span>•</span>
                      <span>{category.students} alunos</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="dashboard-loading">
          <CardHeader>
            <CardTitle>Ações Rápidas</CardTitle>
            <CardDescription>
              Acesso rápido às principais funcionalidades
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {quickActions.map((action, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="flex items-start space-x-3 p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors">
                    <div className={`w-10 h-10 rounded-lg ${action.color} flex items-center justify-center`}>
                      <action.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
                        {action.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {action.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Main Content Tabs */}
        <Tabs defaultValue="overview" className="w-full dashboard-loading">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Visão Geral</TabsTrigger>
            <TabsTrigger value="users">Alunos</TabsTrigger>
            <TabsTrigger value="courses">Cursos IA</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <OverviewChart />
              </div>
              <div>
                <RecentActivity />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="users" className="space-y-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
                <div>
                  <CardTitle>Gerenciamento de Alunos</CardTitle>
                  <CardDescription>
                    Visualize e gerencie todos os alunos da plataforma
                  </CardDescription>
                </div>
                <Button size="sm">
                  <Plus className="w-4 h-4 mr-2" />
                  Novo Aluno
                </Button>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 text-muted-foreground">
                  <Users className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>Sistema de gerenciamento de alunos em desenvolvimento</p>
                  <p className="text-sm mt-2">Funcionalidades: perfis, progresso, certificados</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="courses" className="space-y-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
                <div>
                  <CardTitle>Gerenciamento de Cursos IA</CardTitle>
                  <CardDescription>
                    Crie, edite e gerencie cursos de IA e automação
                  </CardDescription>
                </div>
                <Button size="sm" className="bg-gradient-primary hover:opacity-90">
                  <Plus className="w-4 h-4 mr-2" />
                  Novo Curso IA
                </Button>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8 text-muted-foreground">
                  <Bot className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>Sistema de criação de cursos IA em desenvolvimento</p>
                  <p className="text-sm mt-2">Suporte para: ChatGPT, Midjourney, n8n, automações</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Ferramentas IA Mais Usadas</CardTitle>
                  <CardDescription>
                    Ranking de popularidade das ferramentas
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { name: 'ChatGPT', usage: 89, icon: MessageSquare },
                      { name: 'Midjourney', usage: 76, icon: Image },
                      { name: 'n8n', usage: 64, icon: Workflow },
                      { name: 'Claude', usage: 58, icon: Bot }
                    ].map((tool, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <tool.icon className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm font-medium">{tool.name}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-20 h-2 bg-muted rounded-full">
                            <div 
                              className="h-full bg-gradient-primary rounded-full" 
                              style={{ width: `${tool.usage}%` }}
                            />
                          </div>
                          <Badge variant="secondary">{tool.usage}%</Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Métricas de Sucesso</CardTitle>
                  <CardDescription>
                    Indicadores de performance dos alunos
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Taxa de Conclusão</span>
                      <Badge variant="secondary">78.4%</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Tempo Médio por Curso</span>
                      <Badge variant="secondary">24h</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Satisfação Geral</span>
                      <Badge variant="secondary">4.8/5</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Automações Criadas</span>
                      <Badge variant="secondary">2.3k</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Renda Extra Gerada</span>
                      <Badge variant="secondary">R$ 1.2M</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </AdminLayout>
  );
}