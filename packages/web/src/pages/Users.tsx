import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import api from '../lib/api';
import { PageHeader } from '../components/PageHeader';
import { Modal } from '../components/Modal';
import { apiError } from '../lib/utils';
import { getUser } from '../lib/auth';
import type { Branch } from '../lib/types';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'ADMIN' | 'STAFF' | 'VIEWER';
  branchId: string | null;
  branch: { id: string; name: string } | null;
  isActive: boolean;
  createdAt: string;
}

interface UserForm {
  name: string;
  email: string;
  password: string;
  role: 'ADMIN' | 'STAFF' | 'VIEWER';
  branchId: string;
}

const EMPTY_FORM: UserForm = { name: '', email: '', password: '', role: 'STAFF', branchId: '' };

const ROLE_LABEL: Record<string, string> = {
  ADMIN:  '🔴 Admin',
  STAFF:  '🟡 Personel',
  VIEWER: '🔵 Görüntüleyici',
};

const ROLE_COLOR: Record<string, string> = {
  ADMIN:  'bg-red-50 text-red-700 border-red-200',
  STAFF:  'bg-yellow-50 text-yellow-700 border-yellow-200',
  VIEWER: 'bg-blue-50 text-blue-700 border-blue-200',
};

export default function UsersPage() {
  const qc        = useQueryClient();
  const currentUser = getUser();

  const [modal,    setModal]    = useState<'add' | 'edit' | null>(null);
  const [selected, setSelected] = useState<User | null>(null);
  const [form,     setForm]     = useState<UserForm>(EMPTY_FORM);
  const [err,      setErr]      = useState('');

  const { data: users = [], isLoading } = useQuery<User[]>({
    queryKey: ['users'],
    queryFn:  () => api.get('/users').then((r) => r.data),
  });

  const { data: branches = [] } = useQuery<Branch[]>({
    queryKey: ['branches'],
    queryFn:  () => api.get('/branches').then((r) => r.data),
  });

  // ── Mutations ────────────────────────────────────────────────────────────────
  const saveMutation = useMutation({
    mutationFn: (payload: UserForm) => {
      const data: Record<string, unknown> = {
        name: payload.name,
        email: payload.email,
        role: payload.role,
        branchId: payload.branchId || null,
      };
      if (payload.password) data.password = payload.password;
      return selected
        ? api.put(`/users/${selected.id}`, data)
        : api.post('/users', { ...data, password: payload.password });
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['users'] });
      closeModal();
    },
    onError: (e) => setErr(apiError(e)),
  });

  const deleteMutation = useMutation({
    mutationFn: (id: string) => api.delete(`/users/${id}`),
    onSuccess:  () => qc.invalidateQueries({ queryKey: ['users'] }),
    onError:    (e) => alert(apiError(e)),
  });

  // ── Helpers ──────────────────────────────────────────────────────────────────
  function openAdd() {
    setSelected(null);
    setForm(EMPTY_FORM);
    setErr('');
    setModal('add');
  }

  function openEdit(u: User) {
    setSelected(u);
    setForm({ name: u.name, email: u.email, password: '', role: u.role, branchId: u.branchId ?? '' });
    setErr('');
    setModal('edit');
  }

  function closeModal() {
    setModal(null);
    setSelected(null);
    setErr('');
  }

  function handleDelete(u: User) {
    if (u.id === currentUser?.id) { alert('Kendi hesabınızı silemezsiniz'); return; }
    if (!confirm(`"${u.name}" kullanıcısı pasife alınsın mı?`)) return;
    deleteMutation.mutate(u.id);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErr('');
    if (!form.name.trim())  { setErr('İsim zorunlu'); return; }
    if (!form.email.trim()) { setErr('E-posta zorunlu'); return; }
    if (!selected && !form.password) { setErr('Yeni kullanıcı için şifre zorunlu'); return; }
    saveMutation.mutate(form);
  }

  const activeUsers  = users.filter((u) => u.isActive);
  const inactiveUsers = users.filter((u) => !u.isActive);

  return (
    <div className="flex flex-col h-full">
      <PageHeader
        title="Kullanıcılar"
        subtitle={`${activeUsers.length} aktif kullanıcı`}
        action={
          <button
            onClick={openAdd}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            + Kullanıcı Ekle
          </button>
        }
      />

      <div className="p-6 space-y-4">
        {isLoading ? (
          <div className="text-center py-12 text-gray-500">Yükleniyor…</div>
        ) : (
          <>
            {/* Active users */}
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="text-left px-4 py-3 font-medium text-gray-600">Ad Soyad</th>
                    <th className="text-left px-4 py-3 font-medium text-gray-600">E-posta</th>
                    <th className="text-left px-4 py-3 font-medium text-gray-600">Rol</th>
                    <th className="text-left px-4 py-3 font-medium text-gray-600">Şube</th>
                    <th className="text-left px-4 py-3 font-medium text-gray-600">Oluşturulma</th>
                    <th className="px-4 py-3" />
                  </tr>
                </thead>
                <tbody>
                  {activeUsers.length === 0 && (
                    <tr><td colSpan={6} className="text-center py-8 text-gray-400">Kullanıcı yok</td></tr>
                  )}
                  {activeUsers.map((u) => (
                    <tr key={u.id} className="border-t border-gray-100 hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-900">
                        {u.name}
                        {u.id === currentUser?.id && (
                          <span className="ml-2 text-xs text-blue-600 font-normal">(sen)</span>
                        )}
                      </td>
                      <td className="px-4 py-3 text-gray-600">{u.email}</td>
                      <td className="px-4 py-3">
                        <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium border ${ROLE_COLOR[u.role] ?? ''}`}>
                          {ROLE_LABEL[u.role] ?? u.role}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-gray-600">{u.branch?.name ?? '—'}</td>
                      <td className="px-4 py-3 text-gray-500">
                        {new Date(u.createdAt).toLocaleDateString('tr-TR')}
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex gap-2 justify-end">
                          <button
                            onClick={() => openEdit(u)}
                            className="text-xs text-blue-600 hover:text-blue-800 px-2 py-1 rounded hover:bg-blue-50 transition-colors"
                          >
                            Düzenle
                          </button>
                          {u.id !== currentUser?.id && (
                            <button
                              onClick={() => handleDelete(u)}
                              className="text-xs text-red-500 hover:text-red-700 px-2 py-1 rounded hover:bg-red-50 transition-colors"
                            >
                              Pasife Al
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Inactive / deactivated users */}
            {inactiveUsers.length > 0 && (
              <details className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <summary className="px-4 py-3 text-sm font-medium text-gray-500 cursor-pointer hover:text-gray-700">
                  Pasif kullanıcılar ({inactiveUsers.length})
                </summary>
                <table className="w-full text-sm border-t border-gray-200">
                  <tbody>
                    {inactiveUsers.map((u) => (
                      <tr key={u.id} className="border-t border-gray-100 opacity-60">
                        <td className="px-4 py-3 line-through">{u.name}</td>
                        <td className="px-4 py-3 text-gray-500">{u.email}</td>
                        <td className="px-4 py-3">
                          <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium border ${ROLE_COLOR[u.role] ?? ''}`}>
                            {ROLE_LABEL[u.role] ?? u.role}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-gray-400">{u.branch?.name ?? '—'}</td>
                        <td className="px-4 py-3">
                          <button
                            onClick={() => {
                              if (!confirm(`"${u.name}" tekrar aktifleştirilsin mi?`)) return;
                              saveMutation.mutate({ name: u.name, email: u.email, password: '', role: u.role, branchId: u.branchId ?? '' });
                              api.put(`/users/${u.id}`, { isActive: true })
                                .then(() => qc.invalidateQueries({ queryKey: ['users'] }))
                                .catch((e) => alert(apiError(e)));
                            }}
                            className="text-xs text-green-600 hover:text-green-800 px-2 py-1 rounded hover:bg-green-50"
                          >
                            Aktifleştir
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </details>
            )}
          </>
        )}
      </div>

      {/* Add / Edit Modal */}
      <Modal
        open={!!modal}
        onClose={closeModal}
        title={modal === 'add' ? 'Yeni Kullanıcı Ekle' : 'Kullanıcıyı Düzenle'}
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Ad Soyad *</label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ahmet Yılmaz"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">E-posta *</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="ahmet@sirket.com"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Şifre {modal === 'add' ? '*' : '(değiştirmek için girin)'}
            </label>
            <input
              type="password"
              value={form.password}
              onChange={(e) => setForm((f) => ({ ...f, password: e.target.value }))}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder={modal === 'edit' ? 'Değiştirmemek için boş bırakın' : 'En az 6 karakter'}
              required={modal === 'add'}
              minLength={modal === 'add' ? 6 : undefined}
            />
          </div>

          {/* Role */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Rol *</label>
            <select
              value={form.role}
              onChange={(e) => setForm((f) => ({ ...f, role: e.target.value as UserForm['role'] }))}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="STAFF">Personel — stok ekler, sayım yapar</option>
              <option value="VIEWER">Görüntüleyici — sadece okur</option>
              <option value="ADMIN">Admin — tam yetki</option>
            </select>
          </div>

          {/* Branch */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Şube</label>
            <select
              value={form.branchId}
              onChange={(e) => setForm((f) => ({ ...f, branchId: e.target.value }))}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Şube atanmadı</option>
              {branches.map((b) => (
                <option key={b.id} value={b.id}>{b.name}</option>
              ))}
            </select>
          </div>

          {err && (
            <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">{err}</p>
          )}

          <div className="flex gap-2 justify-end pt-2">
            <button
              type="button"
              onClick={closeModal}
              className="px-4 py-2 text-sm text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              İptal
            </button>
            <button
              type="submit"
              disabled={saveMutation.isPending}
              className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50"
            >
              {saveMutation.isPending ? 'Kaydediliyor…' : modal === 'add' ? 'Ekle' : 'Kaydet'}
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
