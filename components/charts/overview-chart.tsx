"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

const data = [
  { name: 'Jan', users: 2400, revenue: 18400 },
  { name: 'Fev', users: 1398, revenue: 14200 },
  { name: 'Mar', users: 9800, revenue: 32800 },
  { name: 'Abr', users: 3908, revenue: 24800 },
  { name: 'Mai', users: 4800, revenue: 28900 },
  { name: 'Jun', users: 3800, revenue: 31200 },
  { name: 'Jul', users: 4300, revenue: 35400 },
  { name: 'Ago', users: 5400, revenue: 42800 },
  { name: 'Set', users: 6200, revenue: 48200 },
  { name: 'Out', users: 7100, revenue: 52600 },
  { name: 'Nov', users: 8200, revenue: 58400 },
  { name: 'Dez', users: 9100, revenue: 64200 },
];

export function OverviewChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Visão Geral de Performance</CardTitle>
        <CardDescription>
          Crescimento de usuários e receita nos últimos 12 meses
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0.1}/>
                </linearGradient>
                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--chart-2))" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="hsl(var(--chart-2))" stopOpacity={0.1}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted/30" />
              <XAxis 
                dataKey="name" 
                className="text-xs"
                tick={{ fill: 'hsl(var(--muted-foreground))' }}
              />
              <YAxis 
                className="text-xs"
                tick={{ fill: 'hsl(var(--muted-foreground))' }}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}
              />
              <Area
                type="monotone"
                dataKey="users"
                stroke="hsl(var(--primary))"
                fillOpacity={1}
                fill="url(#colorUsers)"
                strokeWidth={2}
              />
              <Area
                type="monotone"
                dataKey="revenue"
                stroke="hsl(var(--chart-2))"
                fillOpacity={1}
                fill="url(#colorRevenue)"
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="flex items-center justify-center space-x-6 mt-4">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-primary"></div>
            <span className="text-sm text-muted-foreground">Usuários</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-chart-2"></div>
            <span className="text-sm text-muted-foreground">Receita (R$)</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}