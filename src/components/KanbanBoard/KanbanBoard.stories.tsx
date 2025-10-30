import type { Meta, StoryObj } from '@storybook/react';
import { KanbanBoard } from './KanbanBoard';
import type { KanbanColumn, KanbanTask } from './KanbanBoard.types';

const meta: Meta<typeof KanbanBoard> = {
  title: 'Components/KanbanBoard',
  component: KanbanBoard,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs']
};
export default meta;
type Story = StoryObj<typeof KanbanBoard>;

const sampleColumns: KanbanColumn[] = [
  { id: 'todo', title: 'To Do', taskIds: ['t1', 't2'] },
  { id: 'inprogress', title: 'In Progress', taskIds: ['t3'] },
  { id: 'done', title: 'Done', taskIds: [] }
];

const now = new Date().toISOString();
const sampleTasks: Record<string, KanbanTask> = {
  t1: { id: 't1', title: 'Design API', description: 'Plan endpoints', priority: 'high', createdAt: now, updatedAt: now },
  t2: { id: 't2', title: 'Write tests', description: 'Unit tests', priority: 'medium', createdAt: now, updatedAt: now },
  t3: { id: 't3', title: 'Implement UI', description: 'Build components', priority: 'urgent', createdAt: now, updatedAt: now }
};

export const Default: Story = {
  args: { columns: sampleColumns, tasks: sampleTasks }
};

export const EmptyBoard: Story = {
  args: { columns: sampleColumns.map(c => ({ ...c, taskIds: [] })), tasks: {} }
};
