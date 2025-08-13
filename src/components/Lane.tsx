import { Droppable } from "react-beautiful-dnd";
import TaskCard from "./TaskCard";
import { Lane as LaneType } from "../context/KanbanContext";

export default function Lane({ lane }: { lane: LaneType }) {
  return (
    <div className="bg-white rounded-xl shadow-card p-3 sm:p-4 min-w-[260px] sm:min-w-[280px] flex-1 border-t-4"
      style={{ borderTopColor: lane.id === "todo" ? "#A1A1AA" : lane.id === "progress" ? "#F6C927" : "#47C87B" }}>
      <div className="flex justify-between items-center mb-4">
        <span className="font-semibold text-base sm:text-lg">{lane.title}</span>
        <span className="text-xs sm:text-sm bg-gray-100 px-2 py-1 rounded">{lane.tasks.length}</span>
      </div>
      <Droppable droppableId={lane.id}>
        {provided => (
          <div ref={provided.innerRef} {...provided.droppableProps} className="space-y-3 min-h-[48px]">
            {lane.tasks.map((task, idx) => <TaskCard key={task.id} task={task} index={idx} />)}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}
