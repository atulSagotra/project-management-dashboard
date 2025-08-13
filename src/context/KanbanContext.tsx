import React, { createContext, useContext, useState, ReactNode } from "react";

export type Task = {
  id: string;
  title: string;
  description: string;
  priority: "High" | "Low";
};

export type Lane = {
  id: string;
  title: string;
  tasks: Task[];
};

type KanbanContextType = {
  lanes: Lane[];
  moveTask: (srcLaneId: string, destLaneId: string, srcIdx: number, destIdx: number) => void;
};

const initialKanban: Lane[] = [
  {
    id: "todo",
    title: "To Do",
    tasks: [
      { id: "task-1", title: "Brainstorming", description: "Collaborative idea generation with the team.", priority: "Low" },
      { id: "task-2", title: "Research", description: "User research to inform product design", priority: "High" },
    ],
  },
  {
    id: "progress",
    title: "On Progress",
    tasks: [
      { id: "task-3", title: "Onboarding Illustration", description: "Illustration for user onboarding flow", priority: "Low" },
      { id: "task-4", title: "Moodboard", description: "Inspiration assets collection", priority: "Low" },
    ],
  },
  {
    id: "done",
    title: "Done",
    tasks: [
      { id: "task-5", title: "Mobile App Design", description: "Final UI completed", priority: "Low" },
      { id: "task-6", title: "Design System", description: "Reusable components ready", priority: "Low" },
    ],
  },
];

const KanbanContext = createContext<KanbanContextType | undefined>(undefined);

export const KanbanProvider = ({ children }: { children: ReactNode }) => {
  const [lanes, setLanes] = useState<Lane[]>(initialKanban);

  const moveTask = (srcLaneId: string, destLaneId: string, srcIdx: number, destIdx: number) => {
    setLanes(prev => {
      const copy = JSON.parse(JSON.stringify(prev));
      const srcLane = copy.find((l: Lane) => l.id === srcLaneId);
      const destLane = copy.find((l: Lane) => l.id === destLaneId);
      if (!srcLane || !destLane) return copy;
      const [moved] = srcLane.tasks.splice(srcIdx, 1);
      destLane.tasks.splice(destIdx, 0, moved);
      return copy;
    });
  };

  return <KanbanContext.Provider value={{ lanes, moveTask }}>{children}</KanbanContext.Provider>;
};

export function useKanban() {
  const ctx = useContext(KanbanContext);
  if (!ctx) throw new Error("useKanban must be used within KanbanProvider");
  return ctx;
}
