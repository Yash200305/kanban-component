import { useCallback, useState } from 'react';

export function useDragAndDrop() {
  const [draggedId, setDraggedId] = useState<string | null>(null);

  const onDragStart = useCallback((e: React.DragEvent, id: string) => {
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', id);
    setDraggedId(id);
  }, []);

  const onDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  }, []);

  const onDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    const id = e.dataTransfer.getData('text/plain');
    setDraggedId(null);
    return id;
  }, []);

  const onDragEnd = useCallback(() => setDraggedId(null), []);

  return { draggedId, onDragStart, onDragOver, onDrop, onDragEnd };
}
