// src/components/KanbanBoard/KanbanCard.tsx
import React from 'react';
import type { KanbanTask } from './KanbanBoard.types';
import { clsx } from 'clsx';

type Props = {
  task: KanbanTask;
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
  draggable?: boolean;
  onDragStart?: (e: React.DragEvent, id: string) => void;
};

const priorityDot = (p?: KanbanTask['priority']) => {
  switch (p) {
    case 'urgent':
      return 'bg-red-600';
    case 'high':
      return 'bg-orange-500';
    case 'medium':
      return 'bg-yellow-500';
    case 'low':
      return 'bg-emerald-500';
    default:
      return 'bg-gray-400';
  }
};

export const KanbanCard: React.FC<Props> = React.memo(
  ({ task, onEdit, onDelete, draggable = true, onDragStart }) => {
    return (
      <div
        className="rounded-md border border-gray-200 bg-white p-3 shadow-sm hover:shadow transition-shadow cursor-grab"
        draggable={draggable}
        onDragStart={(e) => onDragStart?.(e, task.id)}
        role="button"
        tabIndex={0}
        aria-label={`${task.title}. Press space to pick up.`}
      >
        <div className="flex items-start justify-between gap-2">
          <h4 className="font-medium text-gray-900">{task.title}</h4>
          <span
            className={clsx('inline-block h-2 w-2 rounded-full', priorityDot(task.priority))}
            aria-hidden
          />
        </div>

        {task.description && (
          <p className="mt-1 text-sm text-gray-600">{task.description}</p>
        )}

        <div className="mt-2 flex items-center gap-2">
          {task.priority && (
            <span className="inline-flex items-center rounded-md bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-800">
              {task.priority}
            </span>
          )}
        </div>

        <div className="mt-2 flex gap-2">
          {onEdit && (
            <button
              className="text-xs text-blue-600 hover:underline"
              onClick={() => onEdit(task.id)}
            >
              Edit
            </button>
          )}
          {onDelete && (
            <button
              className="text-xs text-rose-600 hover:underline"
              onClick={() => onDelete(task.id)}
            >
              Delete
            </button>
          )}
        </div>
      </div>
    );
  }
);

export default KanbanCard;
