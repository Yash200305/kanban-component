// src/main.tsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/globals.css';

import { KanbanBoard } from './components/KanbanBoard/KanbanBoard';
import type { KanbanColumn, KanbanTask } from './components/KanbanBoard/KanbanBoard.types';

const now = new Date().toISOString();
const columns: KanbanColumn[] = [
  { id: 'todo', title: 'To Do', taskIds: ['t1', 't2'] },
  { id: 'inprogress', title: 'In Progress', taskIds: ['t3'] },
  { id: 'done', title: 'Done', taskIds: [] }
];

const tasks: Record<string, KanbanTask> = {
  t1: { id: 't1', title: 'Design API', description: 'Plan endpoints', priority: 'high', createdAt: now, updatedAt: now },
  t2: { id: 't2', title: 'Write tests', description: 'Unit tests', priority: 'medium', createdAt: now, updatedAt: now },
  t3: { id: 't3', title: 'Implement UI', description: 'Build components', priority: 'urgent', createdAt: now, updatedAt: now }
};

const root = createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <KanbanBoard columns={columns} tasks={tasks} />
  </React.StrictMode>
);
