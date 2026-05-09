export interface AuthUser {
  id: string;
  email: string;
  name: string;
  role: 'ADMIN' | 'STAFF' | 'VIEWER';
  branch: { id: string; name: string } | null;
}

export function getUser(): AuthUser | null {
  try { return JSON.parse(localStorage.getItem('user') ?? 'null'); }
  catch { return null; }
}

export function setAuth(token: string, user: AuthUser) {
  localStorage.setItem('token', token);
  localStorage.setItem('user', JSON.stringify(user));
}

export function clearAuth() {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
}
