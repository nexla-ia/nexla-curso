import { supabase } from './supabase';
import type { User } from '@supabase/supabase-js';

export interface UserProfile {
  id: string;
  email: string;
  full_name: string | null;
  role: 'ADMIN' | 'STUDENT';
  avatar_url: string | null;
  status: 'ACTIVE' | 'SUSPENDED';
  created_at: string;
  updated_at: string;
}

// Registrar novo usuário
export const signUp = async (email: string, password: string, fullName: string): Promise<{ user: UserProfile | null; error: string | null }> => {
  try {
    // 1. Criar usuário no Supabase Auth
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
        }
      }
    });

    if (authError) {
      return { user: null, error: authError.message };
    }

    if (!authData.user) {
      return { user: null, error: 'Erro ao criar usuário' };
    }

    // 2. Criar perfil na tabela profiles
    const { error: profileError } = await supabase
      .from('profiles')
      .insert({
        id: authData.user.id,
        email: authData.user.email!,
        full_name: fullName,
        role: 'STUDENT', // Por padrão, novos usuários são estudantes
        status: 'ACTIVE'
      });

    if (profileError) {
      console.error('Erro ao criar perfil:', profileError);
      return { user: null, error: 'Erro ao criar perfil do usuário' };
    }

    // Retornar dados básicos do usuário criado
    return {
      user: {
        id: authData.user.id,
        email: authData.user.email!,
        full_name: fullName,
        role: 'STUDENT',
        avatar_url: null,
        status: 'ACTIVE',
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      },
      error: null
    };
  } catch (error: any) {
    console.error('Erro no registro:', error);
    return { user: null, error: error.message || 'Erro interno do sistema' };
  }
};

// Login especial para admin (sem autenticação Supabase Auth)
export const signInAdmin = async (email: string, password: string): Promise<{ user: UserProfile | null; error: string | null }> => {
  try {
    // Verificar se é um admin válido
    const { data: profileData, error: profileError } = await supabase
      .from('profiles')
      .select('*')
      .eq('email', email)
      .eq('role', 'ADMIN')
      .eq('status', 'ACTIVE')
      .single();

    if (profileError || !profileData) {
      return { user: null, error: 'Credenciais de administrador inválidas' };
    }

    // Verificar senha (para admin criado manualmente, usamos uma senha padrão)
    const validAdminPasswords = ['admin123', 'nexla2024', 'admin@nexla'];
    
    if (!validAdminPasswords.includes(password)) {
      return { user: null, error: 'Senha de administrador incorreta' };
    }

    // Simular sessão para admin
    localStorage.setItem('admin_session', JSON.stringify(profileData));

    return { user: profileData, error: null };
  } catch (error: any) {
    console.error('Erro no login admin:', error);
    return { user: null, error: error.message || 'Erro interno do sistema' };
  }
};

// Login normal
export const signIn = async (email: string, password: string): Promise<{ user: UserProfile | null; error: string | null }> => {
  try {
    // Primeiro, tentar login como admin
    if (email.includes('admin') || email === 'admin@nexla.com') {
      return await signInAdmin(email, password);
    }

    // 1. Fazer login no Supabase Auth
    const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (authError) {
      return { user: null, error: authError.message };
    }

    if (!authData.user) {
      return { user: null, error: 'Erro ao fazer login' };
    }

    // 2. Buscar perfil do usuário
    const { data: profileData, error: profileError } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', authData.user.id)
      .single();

    if (profileError) {
      console.error('Erro ao buscar perfil:', profileError);
      return { user: null, error: 'Erro ao carregar perfil do usuário' };
    }

    return { user: profileData, error: null };
  } catch (error: any) {
    console.error('Erro no login:', error);
    return { user: null, error: error.message || 'Erro interno do sistema' };
  }
};

// Logout
export const signOut = async (): Promise<{ error: string | null }> => {
  try {
    // Limpar sessão admin se existir
    if (typeof window !== 'undefined') {
      localStorage.removeItem('admin_session');
    }

    const { error } = await supabase.auth.signOut();
    if (error) {
      return { error: error.message };
    }
    return { error: null };
  } catch (error: any) {
    console.error('Erro no logout:', error);
    return { error: error.message || 'Erro interno do sistema' };
  }
};

// Obter usuário atual
export const getCurrentUser = async (): Promise<UserProfile | null> => {
  try {
    // Verificar se há sessão admin
    if (typeof window !== 'undefined') {
      const adminSession = localStorage.getItem('admin_session');
      if (adminSession) {
        try {
          return JSON.parse(adminSession);
        } catch {
          localStorage.removeItem('admin_session');
        }
      }
    }

    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user) {
      return null;
    }

    const { data: profileData, error: profileError } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', user.id)
      .single();

    if (profileError) {
      console.error('Erro ao buscar perfil:', profileError);
      return null;
    }

    return profileData;
  } catch (error) {
    console.error('Erro ao obter usuário atual:', error);
    return null;
  }
};

// Verificar se está autenticado
export const isAuthenticated = async (): Promise<boolean> => {
  try {
    // Verificar sessão admin
    if (typeof window !== 'undefined') {
      const adminSession = localStorage.getItem('admin_session');
      if (adminSession) {
        return true;
      }
    }

    const { data: { user } } = await supabase.auth.getUser();
    return !!user;
  } catch {
    return false;
  }
};

// Atualizar perfil
export const updateProfile = async (updates: Partial<Pick<UserProfile, 'full_name' | 'avatar_url'>>): Promise<{ user: UserProfile | null; error: string | null }> => {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    
    if (!user) {
      return { user: null, error: 'Usuário não autenticado' };
    }

    const { data: profileData, error: profileError } = await supabase
      .from('profiles')
      .update({
        ...updates,
        updated_at: new Date().toISOString()
      })
      .eq('id', user.id)
      .select()
      .single();

    if (profileError) {
      console.error('Erro ao atualizar perfil:', profileError);
      return { user: null, error: 'Erro ao atualizar perfil' };
    }

    return { user: profileData, error: null };
  } catch (error: any) {
    console.error('Erro ao atualizar perfil:', error);
    return { user: null, error: error.message || 'Erro interno do sistema' };
  }
};

// Escutar mudanças de autenticação
export const onAuthStateChange = (callback: (user: UserProfile | null) => void) => {
  return supabase.auth.onAuthStateChange(async (event, session) => {
    if (session?.user) {
      const profile = await getCurrentUser();
      callback(profile);
    } else {
      callback(null);
    }
  });
};