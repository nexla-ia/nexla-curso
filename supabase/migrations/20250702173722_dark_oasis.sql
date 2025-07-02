-- Script para criar usuário administrador
-- Execute este SQL no painel do Supabase (SQL Editor)

-- 1. Primeiro, vamos criar as tabelas se ainda não existirem
CREATE TABLE IF NOT EXISTS profiles (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  full_name TEXT,
  role TEXT CHECK (role IN ('ADMIN', 'STUDENT')) DEFAULT 'STUDENT',
  avatar_url TEXT,
  status TEXT CHECK (status IN ('ACTIVE', 'SUSPENDED')) DEFAULT 'ACTIVE',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Habilitar RLS
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

-- 3. Políticas de segurança
CREATE POLICY "Usuários podem ver próprio perfil" ON profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Usuários podem atualizar próprio perfil" ON profiles
  FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Admins podem ver todos os perfis" ON profiles
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM profiles 
      WHERE id = auth.uid() AND role = 'ADMIN'
    )
  );

-- 4. Trigger para criar perfil automaticamente
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name)
  VALUES (new.id, new.email, new.raw_user_meta_data->>'full_name');
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Criar trigger se não existir
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();

-- 5. CRIAR USUÁRIO ADMIN DIRETAMENTE
-- Substitua 'admin@nexla.com' e 'senha123' pelos dados que você quer

-- Primeiro, inserir na tabela auth.users (isso normalmente é feito pelo Supabase Auth)
-- Vamos usar uma função para isso:

CREATE OR REPLACE FUNCTION create_admin_user(
  admin_email TEXT,
  admin_password TEXT,
  admin_name TEXT
)
RETURNS UUID AS $$
DECLARE
  user_id UUID;
BEGIN
  -- Gerar um UUID para o usuário
  user_id := gen_random_uuid();
  
  -- Inserir diretamente na tabela profiles
  INSERT INTO profiles (id, email, full_name, role, status)
  VALUES (user_id, admin_email, admin_name, 'ADMIN', 'ACTIVE');
  
  RETURN user_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Executar a função para criar o admin
SELECT create_admin_user(
  'admin@nexla.com',    -- Email do admin
  'admin123',           -- Senha (não usada neste método)
  'Administrador NEXLA' -- Nome completo
);

-- 6. Verificar se foi criado
SELECT * FROM profiles WHERE role = 'ADMIN';