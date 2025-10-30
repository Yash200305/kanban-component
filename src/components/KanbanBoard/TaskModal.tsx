import React from 'react';
import { Modal } from '../primitives/Modal';
import type { KanbanTask } from './KanbanBoard.types';

type Props = {
  open: boolean;
  task?: KanbanTask;
  onClose: () => void;
  onSave: (updates: Partial<KanbanTask>) => void;
};

export const TaskModal: React.FC<Props> = ({ open, task, onClose, onSave }) => {
  const [title, setTitle] = React.useState(task?.title ?? '');
  const [description, setDescription] = React.useState(task?.description ?? '');

  React.useEffect(() => {
    setTitle(task?.title ?? '');
    setDescription(task?.description ?? '');
  }, [task]);

  return (
    <Modal open={open} onClose={onClose} title="Edit task">
      <div className="flex flex-col gap-3">
        <input className="rounded border px-2 py-1" value={title} onChange={(e) => setTitle(e.target.value)} />
        <textarea className="rounded border px-2 py-1" value={description} onChange={(e) => setDescription(e.target.value)} />
        <div className="flex justify-end gap-2">
          <button className="rounded bg-gray-100 px-3 py-1.5 text-sm" onClick={onClose}>Cancel</button>
          <button className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white" onClick={() => onSave({ title, description })}>Save</button>
        </div>
      </div>
    </Modal>
  );
};

export default TaskModal;
