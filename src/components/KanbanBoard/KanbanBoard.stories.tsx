// src/components/KanbanBoard/KanbanBoard.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { within } from '@storybook/test';
import { KanbanBoard } from './KanbanBoard';
import type { KanbanBoardProps, KanbanColumn, KanbanTask } from './KanbanBoard.types';

const meta: Meta<typeof KanbanBoard> = {
  title: 'Components/KanbanBoard',
  component: KanbanBoard,
  parameters: { layout: 'fullscreen' },
  tags: ['autodocs']
};
export default meta;

type Story = StoryObj<typeof KanbanBoard>;

const now = new Date().toISOString();

// -------------------------
// Helpers
// -------------------------
function makeTasks(n: number, prefix = 't'): { tasks: Record<string, KanbanTask>; ids: string[] } {
  const tasks: Record<string, KanbanTask> = {};
  const ids: string[] = [];
  const priorities = ['low', 'medium', 'high', 'urgent'] as const;

  for (let i = 1; i <= n; i++) {
    const id = `${prefix}${i}`;
    ids.push(id);
    tasks[id] = {
      id,
      title: `Task ${i}`,
      description: i % 3 === 0 ? 'Longer description for demo' : 'Short note',
      priority: priorities[i % priorities.length],
      createdAt: now,
      updatedAt: now
    };
  }
  return { tasks, ids };
}

// -------------------------
// 1) Default
// -------------------------
export const Default: Story = {
  args: {
    columns: [
      { id: 'todo', title: 'To Do', taskIds: ['t1', 't2'] },
      { id: 'inprogress', title: 'In Progress', taskIds: ['t3'] },
      { id: 'done', title: 'Done', taskIds: [] }
    ] satisfies KanbanColumn[],
    tasks: {
      t1: { id: 't1', title: 'Design API', description: 'Plan endpoints', priority: 'high', createdAt: now, updatedAt: now },
      t2: { id: 't2', title: 'Write tests', description: 'Unit tests', priority: 'medium', createdAt: now, updatedAt: now },
      t3: { id: 't3', title: 'Implement UI', description: 'Build components', priority: 'urgent', createdAt: now, updatedAt: now }
    } satisfies Record<string, KanbanTask>
  } satisfies Partial<KanbanBoardProps>
};

// -------------------------
// 2) EmptyBoard
// -------------------------
export const EmptyBoard: Story = {
  args: {
    columns: [
      { id: 'todo', title: 'To Do', taskIds: [] },
      { id: 'inprogress', title: 'In Progress', taskIds: [] },
      { id: 'done', title: 'Done', taskIds: [] }
    ] satisfies KanbanColumn[],
    tasks: {} as Record<string, KanbanTask>
  } satisfies Partial<KanbanBoardProps>
};

// -------------------------
// 3) ManyTasks (no spreads; fully typed)
// -------------------------
export const ManyTasks: Story = {
  name: 'Many Tasks',
  args: (() => {
    const todo = makeTasks(12, 'td');
    const inprog = makeTasks(10, 'ip');
    const done = makeTasks(8, 'dn');

    const columns: KanbanColumn[] = [
      { id: 'todo', title: 'To Do', taskIds: todo.ids },
      { id: 'inprogress', title: 'In Progress', taskIds: inprog.ids },
      { id: 'done', title: 'Done', taskIds: done.ids }
    ];

    const tasks: Record<string, KanbanTask> = { ...todo.tasks, ...inprog.tasks, ...done.tasks };

    return { columns, tasks } satisfies Partial<KanbanBoardProps>;
  })()
};

// -------------------------
// 4) MobileView (viewport preset)
// -------------------------
export const MobileView: Story = {
  name: 'Mobile View',
  parameters: {
    viewport: {
      defaultViewport: 'iphone6' // Viewport addon preset
    }
  },
  args: (() => {
    const t = makeTasks(4, 'm');
    const columns: KanbanColumn[] = [
      { id: 'todo', title: 'To Do', taskIds: t.ids.slice(0, 2) },
      { id: 'inprogress', title: 'In Progress', taskIds: t.ids.slice(2) },
      { id: 'done', title: 'Done', taskIds: [] }
    ];
    const tasks: Record<string, KanbanTask> = t.tasks;
    return { columns, tasks } satisfies Partial<KanbanBoardProps>;
  })()
};

// -------------------------
// 5) KeyboardNavigation (simple play function)
// -------------------------
export const KeyboardNavigation: Story = {
  name: 'Keyboard Navigation',
  args: Default.args,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const editButtons = await canvas.findAllByRole('button', { name: /edit/i });
    if (editButtons[0]) editButtons[0].focus();
  }
};
