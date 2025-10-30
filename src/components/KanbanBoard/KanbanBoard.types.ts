export type Id = string;

export interface KanbanTask {
  id: Id;
  title: string;
  description?: string;
  assignee?: string;
  priority?: 'low' | 'medium' | 'high' | 'urgent';
  createdAt: string;
  updatedAt: string;
}

export interface KanbanColumn {
  id: Id;
  title: string;
  color?: string;
  taskIds: Id[];
}

export interface KanbanBoardProps {
  columns: KanbanColumn[];
  tasks: Record<Id, KanbanTask>;
  onTaskMove?: (taskId: Id, toColumnId: Id, toIndex: number) => void;
  onTaskCreate?: (columnId: Id) => void;
  onTaskEdit?: (taskId: Id) => void;
  onTaskDelete?: (taskId: Id) => void;
}
