"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { 
  UserPlus, 
  BookOpen, 
  Award, 
  MessageSquare,
  AlertTriangle
} from 'lucide-react';

const recentActivities = [
  {
    id: 1,
    type: 'user_registered',
    title: 'Novo usuário registrado',
    description: 'Maria Santos se cadastrou na plataforma',
    user: {
      name: 'Maria Santos',
      email: 'maria@email.com',
      avatar: null
    },
    timestamp: new Date(Date.now() - 1000 * 60 * 15), // 15 minutes ago
    icon: UserPlus,
    color: 'text-green-600',
    bgColor: 'bg-green-50'
  },
  {
    id: 2,
    type: 'course_completed',
    title: 'Curso concluído',
    description: 'João Silva completou "Desenvolvimento Web Moderno"',
    user: {
      name: 'João Silva',
      email: 'joao@email.com',
      avatar: null
    },
    timestamp: new Date(Date.now() - 1000 * 60 * 45), // 45 minutes ago
    icon: Award,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50'
  },
  {
    id: 3,
    type: 'course_published',
    title: 'Novo curso publicado',
    description: 'Curso "React Avançado" foi publicado',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
    icon: BookOpen,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50'
  },
  {
    id: 4,
    type: 'support_ticket',
    title: 'Ticket de suporte',
    description: 'Novo ticket sobre problemas de login',
    user: {
      name: 'Ana Costa',
      email: 'ana@email.com',
      avatar: null
    },
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 4), // 4 hours ago
    icon: MessageSquare,
    color: 'text-orange-600',
    bgColor: 'bg-orange-50'
  },
  {
    id: 5,
    type: 'system_alert',
    title: 'Alerta do sistema',
    description: 'Uso de CPU acima de 80% detectado',
    timestamp: new Date(Date.now() - 1000 * 60 * 60 * 6), // 6 hours ago
    icon: AlertTriangle,
    color: 'text-red-600',
    bgColor: 'bg-red-50'
  }
];

export function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Atividade Recente</CardTitle>
        <CardDescription>
          Últimas atividades da plataforma
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {recentActivities.map((activity) => (
            <div key={activity.id} className="flex items-start space-x-3">
              <div className={`w-8 h-8 rounded-full ${activity.bgColor} flex items-center justify-center flex-shrink-0`}>
                <activity.icon className={`w-4 h-4 ${activity.color}`} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-foreground">
                    {activity.title}
                  </p>
                  <Badge variant="secondary" className="text-xs">
                    {formatDistanceToNow(activity.timestamp, { 
                      addSuffix: true, 
                      locale: ptBR 
                    })}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  {activity.description}
                </p>
                {activity.user && (
                  <div className="flex items-center space-x-2 mt-2">
                    <Avatar className="w-5 h-5">
                      <AvatarImage src={activity.user.avatar} />
                      <AvatarFallback className="text-xs bg-muted">
                        {activity.user.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-xs text-muted-foreground">
                      {activity.user.name}
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}