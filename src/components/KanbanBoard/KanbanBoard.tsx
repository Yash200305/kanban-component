import React, { useCallback, useMemo, useState } from 'react';
import type { KanbanBoardProps, KanbanTask } from './KanbanBoard.types';
import KanbanColumn from './KanbanColumn';
import { useKanbanBoard } from '../../hooks/useKanbanBoard';
import { useDragAndDrop } from '../../hooks/useDragAndDrop';
import { Button } from '../primitives/Button';
import { Modal } from '../primitives/Modal';

export const KanbanBoard: React.FC<KanbanBoardProps> = ({ columns: initialColumns, tasks: initialTasks, onTaskMove, onTaskCreate, onTaskEdit, onTaskDelete }) => {
  const { columns, tasksByColumn, moveTask, createTask, deleteTask } = useKanbanBoard(initialColumns, initialTasks);
  const { onDragStart, onDragOver, onDrop } = useDragAndDrop();
  const [open, setOpen] = useState(false);
  const [currentColumn, setCurrentColumn] = useState<string | null>(null);
  const [form, setForm] = useState<Pick<KanbanTask, 'title' | 'description' | 'priority'>>({ title: '', description: '', priority: 'medium' });

  const handleDrop = useCallback(
    (e: React.DragEvent, toColumnId: string, toIndex: number) => {
      const id = onDrop(e);
      if (!id) return;
      moveTask(id, toColumnId, toIndex);
      onTaskMove?.(id, toColumnId, toIndex);
    },
    [moveTask, onDrop, onTaskMove]
  );

  const openCreate = useCallback((colId: string) => {
    setCurrentColumn(colId);
    setForm({ title: '', description: '', priority: 'medium' });
    setOpen(true);
  }, []);

  const submitCreate = useCallback(() => {
    if (!currentColumn || !form.title.trim()) return;
    createTask(currentColumn, form);
    onTaskCreate?.(currentColumn);
    setOpen(false);
  }, [currentColumn, form, createTask, onTaskCreate]);

  const cols = useMemo(() => columns, [columns]);

  return (
    <div className="flex gap-4 overflow-x-auto p-4">
      {cols.map((col) => (
        <div key={col.id} className="flex flex-col gap-2">
          <KanbanColumn
            column={col}
            tasks={tasksByColumn[col.id] ?? []}
            onDragOver={onDragOver}
            onDrop={handleDrop}
            onCardDragStart={onDragStart}
            onEdit={(id) => onTaskEdit?.(id)}
            onDelete={(id) => {
              deleteTask(id);
              onTaskDelete?.(id);
            }}
          />
          <Button variant="secondary" onClick={() => openCreate(col.id)}>Add task</Button>
        </div>
      ))}

      <Modal open={open} onClose={() => setOpen(false)} title="Create task">
        <div className="flex flex-col gap-3">
          <input className="rounded border px-2 py-1" placeholder="Title" value={form.title} onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))} />
          <textarea className="rounded border px-2 py-1" placeholder="Description" value={form.description} onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))} />
          <select className="rounded border px-2 py-1" value={form.priority} onChange={(e) => setForm((f) => ({ ...f, priority: e.target.value as KanbanTask['priority'] }))}>
            <option value="low">low</option>
            <option value="medium">medium</option>
            <option value="high">high</option>
            <option value="urgent">urgent</option>
          </select>
          <div className="flex justify-end gap-2">
            <Button variant="ghost" onClick={() => setOpen(false)}>Cancel</Button>
            <Button onClick={submitCreate}>Create</Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default KanbanBoard;
