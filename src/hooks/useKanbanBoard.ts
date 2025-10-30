// src/hooks/useKanbanBoard.ts
import { useCallback, useMemo, useState } from 'react';
import type { Id, KanbanColumn, KanbanTask } from '../components/KanbanBoard/KanbanBoard.types';

export function useKanbanBoard(
  initialColumns: KanbanColumn[],
  initialTasks: Record<Id, KanbanTask>
) {
  const [columns, setColumns] = useState<KanbanColumn[]>(initialColumns);
  const [tasks, setTasks] = useState<Record<Id, KanbanTask>>(initialTasks);

  // Derived: tasks grouped by column
  const tasksByColumn = useMemo(() => {
    const map: Record<Id, KanbanTask[]> = {};
    for (const c of columns) {
      const list: KanbanTask[] = [];
      for (const tid of c.taskIds) {
        const t = tasks[tid];
        if (t) list.push(t);
      }
      map[c.id] = list;
    }
    return map;
  }, [columns, tasks]);

  const moveTask = useCallback((taskId: Id, toColumnId: Id, toIndex: number) => {
    setColumns((prev) => {
      // Remove task from all columns
      const next: KanbanColumn[] = prev.map((c) => ({
        ...c,
        taskIds: c.taskIds.filter((id) => id !== taskId),
      }));

      // Find target column
      const target = next.find((c) => c.id === toColumnId);
      if (!target) return prev; // unknown column

      // Insert task at clamped index
      const ids = target.taskIds.slice();
      const clamped = Math.max(0, Math.min(toIndex, ids.length));
      ids.splice(clamped, 0, taskId);

      // Return updated columns
      return next.map((c) => (c.id === toColumnId ? { ...c, taskIds: ids } : c));
    });

    // Update the task's updatedAt if it exists
    setTasks((prev) => {
      const existing = prev[taskId];
      if (!existing) return prev;
      const updated: KanbanTask = { ...existing, updatedAt: new Date().toISOString() };
      const result: Record<string, KanbanTask> = { ...prev, [taskId]: updated };
      return result;
    });
  }, []);

  const createTask = useCallback(
    (columnId: Id, payload: Pick<KanbanTask, 'title' | 'description' | 'priority'>) => {
      const id =
        globalThis.crypto?.randomUUID?.() ?? Math.random().toString(36).slice(2);
      const now = new Date().toISOString();
      const task: KanbanTask = {
        id,
        title: payload.title,
        description: payload.description,
        priority: payload.priority,
        createdAt: now,
        updatedAt: now,
      };

      setTasks((prev) => {
        const result: Record<string, KanbanTask> = { ...prev, [id]: task };
        return result;
      });

      setColumns((prev) =>
        prev.map((c) =>
          c.id === columnId ? { ...c, taskIds: [...c.taskIds, id] } : c
        )
      );
    },
    []
  );

  const updateTask = useCallback((id: Id, updates: Partial<KanbanTask>) => {
    setTasks((prev) => {
      const current = prev[id];
      if (!current) return prev;
      const updated: KanbanTask = {
        ...current,
        ...updates,
        updatedAt: new Date().toISOString(),
      };
      const result: Record<string, KanbanTask> = { ...prev, [id]: updated };
      return result;
    });
  }, []);

  const deleteTask = useCallback((id: Id) => {
    // Remove from columns
    setColumns((prev) =>
      prev.map((c) => ({ ...c, taskIds: c.taskIds.filter((x) => x !== id) }))
    );

    // Remove from tasks
    setTasks((prev) => {
      if (!(id in prev)) return prev;
      const { [id]: _removed, ...rest } = prev;
      // Asserting rest as the exact record type keeps SetStateAction inference precise
      return rest as Record<string, KanbanTask>;
    });
  }, []);

  return {
    columns,
    tasks,
    tasksByColumn,
    moveTask,
    createTask,
    updateTask,
    deleteTask,
  };
}
