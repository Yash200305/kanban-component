import React from 'react';

type Props = {
  open: boolean;
  onClose: () => void;
  title?: string;
  children?: React.ReactNode;
};

export const Modal: React.FC<Props> = ({ open, onClose, title, children }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center" role="dialog" aria-modal="true">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} aria-hidden />
      <div className="relative z-10 w-full max-w-md rounded-lg bg-white p-4 shadow-lg">
        {title && <h2 className="text-lg font-semibold text-gray-900">{title}</h2>}
        <div className="mt-2">{children}</div>
        <div className="mt-4 flex justify-end">
          <button className="text-sm text-gray-700 hover:underline" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
