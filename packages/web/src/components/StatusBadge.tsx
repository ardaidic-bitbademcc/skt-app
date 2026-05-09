import { ExpiryStatus, STATUS_CLASS, STATUS_LABEL, STATUS_DOT } from '../lib/utils';

export function StatusBadge({ status }: { status: ExpiryStatus }) {
  return (
    <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs font-semibold ${STATUS_CLASS[status]}`}>
      <span className={`w-1.5 h-1.5 rounded-full ${STATUS_DOT[status]}`} />
      {STATUS_LABEL[status]}
    </span>
  );
}
