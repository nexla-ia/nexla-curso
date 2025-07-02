import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://lyvknbggtimdivywfeys.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx5dmtuYmdndGltZGl2eXdmZXlzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI1NzA0ODgsImV4cCI6MjA1ODE0NjQ4OH0.0fMdaZwFLhedoxZOYabMZF_oLLTSAwae2ZgFnEpJNNY';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          email: string;
          full_name: string | null;
          role: 'ADMIN' | 'STUDENT';
          avatar_url: string | null;
          status: 'ACTIVE' | 'SUSPENDED';
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          email: string;
          full_name?: string | null;
          role?: 'ADMIN' | 'STUDENT';
          avatar_url?: string | null;
          status?: 'ACTIVE' | 'SUSPENDED';
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          email?: string;
          full_name?: string | null;
          role?: 'ADMIN' | 'STUDENT';
          avatar_url?: string | null;
          status?: 'ACTIVE' | 'SUSPENDED';
          updated_at?: string;
        };
      };
      courses: {
        Row: {
          id: string;
          title: string;
          description: string;
          thumbnail_url: string | null;
          instructor_id: string;
          duration_hours: number;
          level: 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED';
          category: string;
          price: number;
          status: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          description: string;
          thumbnail_url?: string | null;
          instructor_id: string;
          duration_hours?: number;
          level?: 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED';
          category: string;
          price?: number;
          status?: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          title?: string;
          description?: string;
          thumbnail_url?: string | null;
          instructor_id?: string;
          duration_hours?: number;
          level?: 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED';
          category?: string;
          price?: number;
          status?: 'DRAFT' | 'PUBLISHED' | 'ARCHIVED';
          updated_at?: string;
        };
      };
      modules: {
        Row: {
          id: string;
          course_id: string;
          title: string;
          description: string | null;
          order_index: number;
          created_at: string;
        };
        Insert: {
          id?: string;
          course_id: string;
          title: string;
          description?: string | null;
          order_index: number;
          created_at?: string;
        };
        Update: {
          id?: string;
          course_id?: string;
          title?: string;
          description?: string | null;
          order_index?: number;
        };
      };
      lessons: {
        Row: {
          id: string;
          module_id: string;
          title: string;
          content_type: 'VIDEO' | 'PDF' | 'QUIZ' | 'TEXT';
          content_url: string | null;
          content_text: string | null;
          duration_minutes: number | null;
          order_index: number;
          is_free: boolean;
          created_at: string;
        };
        Insert: {
          id?: string;
          module_id: string;
          title: string;
          content_type: 'VIDEO' | 'PDF' | 'QUIZ' | 'TEXT';
          content_url?: string | null;
          content_text?: string | null;
          duration_minutes?: number | null;
          order_index: number;
          is_free?: boolean;
          created_at?: string;
        };
        Update: {
          id?: string;
          module_id?: string;
          title?: string;
          content_type?: 'VIDEO' | 'PDF' | 'QUIZ' | 'TEXT';
          content_url?: string | null;
          content_text?: string | null;
          duration_minutes?: number | null;
          order_index?: number;
          is_free?: boolean;
        };
      };
      enrollments: {
        Row: {
          id: string;
          user_id: string;
          course_id: string;
          enrolled_at: string;
          progress_percentage: number;
          completed_at: string | null;
          certificate_url: string | null;
        };
        Insert: {
          id?: string;
          user_id: string;
          course_id: string;
          enrolled_at?: string;
          progress_percentage?: number;
          completed_at?: string | null;
          certificate_url?: string | null;
        };
        Update: {
          id?: string;
          user_id?: string;
          course_id?: string;
          progress_percentage?: number;
          completed_at?: string | null;
          certificate_url?: string | null;
        };
      };
      lesson_progress: {
        Row: {
          id: string;
          user_id: string;
          lesson_id: string;
          completed: boolean;
          watched_duration: number | null;
          completed_at: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          lesson_id: string;
          completed?: boolean;
          watched_duration?: number | null;
          completed_at?: string | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          completed?: boolean;
          watched_duration?: number | null;
          completed_at?: string | null;
        };
      };
    };
  };
};