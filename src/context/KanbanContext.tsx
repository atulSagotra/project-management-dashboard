import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Task = {
  id: string;
  title: string;
  description: string;
  priority: String;
};

export type Lane = {
  id: string;
  title: string;
  tasks: Task[];
};

type KanbanContextType = {
  lanes: Lane[];
  moveTask: (
    srcLaneId: string,
    destLaneId: string,
    srcIdx: number,
    destIdx: number
  ) => void;
  addTask: (
    laneId: string,
    title: string,
    description?: string,
    priority?: string
  ) => void;
};

const initialLanes: Lane[] = [
  {
    id: 'todo',
    title: 'To Do',
    tasks: [
      { id: 'task-1', title: 'Brainstorming', description: 'Ideation with team', priority: 'Low' },
      { id: 'task-2', title: 'Research', description: 'User research', priority: 'High' },
    ],
  },
  {
    id: 'progress',
    title: 'On Progress',
    tasks: [
      { id: 'task-3', title: 'UI Mockups', description: 'Design screens in Figma', priority: 'Low' },
    ],
  },
  {
    id: 'done',
    title: 'Done',
    tasks: [
      { id: 'task-4', title: 'Wireframes', description: 'Basic wireframe completed', priority: 'Low' },
    ],
  },
];

const KanbanContext = createContext<KanbanContextType | undefined>(undefined);

export const KanbanProvider = ({ children }: { children: ReactNode }) => {
  const [lanes, setLanes] = useState<Lane[]>(initialLanes);

  const moveTask = (srcLaneId: string, destLaneId: string, srcIdx: number, destIdx: number) => {
    setLanes((prev) => {
      const copy = JSON.parse(JSON.stringify(prev)) as Lane[];
      const srcLane = copy.find((l) => l.id === srcLaneId);
      const destLane = copy.find((l) => l.id === destLaneId);
      if (!srcLane || !destLane) return prev;

      const [moved] = srcLane.tasks.splice(srcIdx, 1);
      destLane.tasks.splice(destIdx, 0, moved);
      return copy;
    });
  };

  const addTask = (
      laneId: string,
      title: string,
      description: string = '',
      priority?: string
    ) => {
      setLanes((prev) => {
        const copy = JSON.parse(JSON.stringify(prev)) as Lane[];
        const lane = copy.find((l) => l.id === laneId);
        if (!lane) return prev;
        lane.tasks.push({
          id: `task-${Date.now()}`,
          title,
          description,
          priority: priority ?? 'Low',
        });
        return copy;
      });
    };

  return (
    <KanbanContext.Provider value={{ lanes, moveTask, addTask }}>
      {children}
    </KanbanContext.Provider>
  );
};

export const useKanban = () => {
  const ctx = useContext(KanbanContext);
  if (!ctx) throw new Error('useKanban must be used within KanbanProvider');
  return ctx;
};
