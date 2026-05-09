import { PageSpinner } from './Spinner';

export interface Column<T> {
  key: string;
  header: string;
  render?: (row: T) => React.ReactNode;
  className?: string;
}

interface Props<T extends { id: string }> {
  columns: Column<T>[];
  data: T[];
  loading?: boolean;
  empty?: string;
}

export function Table<T extends { id: string }>({ columns, data, loading, empty = 'Kayıt bulunamadı' }: Props<T>) {
  if (loading) return <PageSpinner />;

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 text-sm">
        <thead className="bg-gray-50">
          <tr>
            {columns.map((c) => (
              <th key={c.key} className={`px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider ${c.className ?? ''}`}>
                {c.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 bg-white">
          {data.length === 0 ? (
            <tr>
              <td colSpan={columns.length} className="text-center py-10 text-gray-400">{empty}</td>
            </tr>
          ) : (
            data.map((row) => (
              <tr key={row.id} className="hover:bg-gray-50 transition-colors">
                {columns.map((c) => (
                  <td key={c.key} className={`px-4 py-3 text-gray-700 whitespace-nowrap ${c.className ?? ''}`}>
                    {c.render ? c.render(row) : (row as any)[c.key] ?? '-'}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
