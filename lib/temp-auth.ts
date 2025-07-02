// Sistema de autenticação temporário para testes
// Remove quando conectar o Supabase

export interface User {
  id: string;
  email: string;
  full_name: string;
  role: 'ADMIN' | 'STUDENT';
  avatar_url?: string;
  status: 'ACTIVE' | 'SUSPENDED';
  created_at: string;
  updated_at: string;
}

// Usuários de teste
const TEST_USERS: User[] = [
  {
    id: '1',
    email: 'admin@nexla.com',
    full_name: 'Admin Sistema',
    role: 'ADMIN',
    status: 'ACTIVE',
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  },
  {
    id: '2',
    email: 'student@nexla.com',
    full_name: 'Maria Silva',
    role: 'STUDENT',
    status: 'ACTIVE',
    created_at: '2024-01-15T00:00:00Z',
    updated_at: '2024-01-15T00:00:00Z'
  },
  {
    id: '3',
    email: 'joao@email.com',
    full_name: 'João Santos',
    role: 'STUDENT',
    status: 'ACTIVE',
    created_at: '2024-02-01T00:00:00Z',
    updated_at: '2024-02-01T00:00:00Z'
  }
];

// Simula login
export const tempLogin = async (email: string, password: string): Promise<{ user: User | null; error: string | null }> => {
  // Simula delay de rede
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Credenciais de teste
  const validCredentials = [
    { email: 'admin@nexla.com', password: 'admin123' },
    { email: 'student@nexla.com', password: 'student123' },
    { email: 'joao@email.com', password: '123456' }
  ];
  
  const credential = validCredentials.find(c => c.email === email && c.password === password);
  
  if (!credential) {
    return { user: null, error: 'Email ou senha incorretos' };
  }
  
  const user = TEST_USERS.find(u => u.email === email);
  
  if (user) {
    // Salva no localStorage para persistir a sessão
    localStorage.setItem('temp_user', JSON.stringify(user));
    return { user, error: null };
  }
  
  return { user: null, error: 'Usuário não encontrado' };
};

// Simula registro
export const tempRegister = async (email: string, password: string, fullName: string): Promise<{ user: User | null; error: string | null }> => {
  // Simula delay de rede
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Verifica se email já existe
  if (TEST_USERS.some(u => u.email === email)) {
    return { user: null, error: 'Email já está em uso' };
  }
  
  // Cria novo usuário
  const newUser: User = {
    id: Date.now().toString(),
    email,
    full_name: fullName,
    role: 'STUDENT',
    status: 'ACTIVE',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  };
  
  // Adiciona à lista (em produção seria salvo no banco)
  TEST_USERS.push(newUser);
  
  // Salva no localStorage
  localStorage.setItem('temp_user', JSON.stringify(newUser));
  
  return { user: newUser, error: null };
};

// Pega usuário atual
export const getCurrentUser = (): User | null => {
  if (typeof window === 'undefined') return null;
  
  const userStr = localStorage.getItem('temp_user');
  if (!userStr) return null;
  
  try {
    return JSON.parse(userStr);
  } catch {
    return null;
  }
};

// Logout
export const tempLogout = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('temp_user');
  }
};

// Atualizar perfil
export const updateProfile = async (updates: Partial<Pick<User, 'full_name' | 'avatar_url'>>): Promise<{ user: User | null; error: string | null }> => {
  await new Promise(resolve => setTimeout(resolve, 500));
  
  const currentUser = getCurrentUser();
  if (!currentUser) {
    return { user: null, error: 'Usuário não autenticado' };
  }
  
  const updatedUser = {
    ...currentUser,
    ...updates,
    updated_at: new Date().toISOString()
  };
  
  // Atualiza no localStorage
  localStorage.setItem('temp_user', JSON.stringify(updatedUser));
  
  // Atualiza na lista de usuários
  const userIndex = TEST_USERS.findIndex(u => u.id === currentUser.id);
  if (userIndex !== -1) {
    TEST_USERS[userIndex] = updatedUser;
  }
  
  return { user: updatedUser, error: null };
};

// Verificar se está autenticado
export const isAuthenticated = (): boolean => {
  return getCurrentUser() !== null;
};