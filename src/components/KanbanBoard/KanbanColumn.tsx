// src/components/KanbanBoard/KanbanColumn.tsx
import React from 'react';
import type { KanbanColumn as KanbanColumnModel, KanbanTask } from './KanbanBoard.types';
import KanbanCard from './KanbanCard';

type Props = {
  column: KanbanColumnModel;
  tasks: KanbanTask[];
  onDragOver: (e: React.DragEvent) => void;
  onDrop: (e: React.DragEvent, columnId: string, index: number) => void;
  onCardDragStart: (e: React.DragEvent, id: string) => void;
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
};

export const KanbanColumn: React.FC<Props> = ({
  column,
  tasks,
  onDragOver,
  onDrop,
  onCardDragStart,
  onEdit,
  onDelete
}) => {
  return (
    <section
      className="flex w-80 min-w-[20rem] flex-col rounded-lg bg-gray-50 p-3"
      role="region"
      aria-label={`${column.title} column with ${tasks.length} tasks`}
      onDragOver={onDragOver}
      onDrop={(e) => onDrop(e, column.id, tasks.length)} // drop at end by default
      data-column-id={column.id}
    >
      <header className="mb-2 flex items-center justify-between">
        <h3 className="text-sm font-semibold text-gray-800">{column.title}</h3>
        <span className="text-xs text-gray-500" aria-label="task count">
          {tasks.length}
        </span>
      </header>

      <div className="flex flex-col gap-3" role="list">
        {/* Drop before the first card */}
        <div
          role="button"
          aria-label={`Drop before first task in ${column.title}`}
          className="h-0.5"
          onDragOver={onDragOver}
          onDrop={(e) => onDrop(e, column.id, 0)}
        />

        {tasks.map((t, idx) => (
          <div key={t.id} role="listitem">
            <KanbanCard
              task={t}
              onEdit={onEdit}
              onDelete={onDelete}
              onDragStart={onCardDragStart}
            />
            {/* Per-item drop zone (drop before next index) */}
            <div
              role="button"
              aria-label={`Drop after ${t.title}`}
              className="h-0.5"
              onDragOver={onDragOver}
              onDrop={(e) => onDrop(e, column.id, idx + 1)}
            />
          </div>
        ))}

        {/* Empty state hint */}
        {tasks.length === 0 && (
          <div
            className="rounded border border-dashed border-gray-300 p-3 text-center text-sm text-gray-500"
            aria-label={`No tasks in ${column.title}. Drag tasks here.`}
          >
            Drag tasks here
          </div>
        )}
      </div>
    </section>
  );
};

export default KanbanColumn;
