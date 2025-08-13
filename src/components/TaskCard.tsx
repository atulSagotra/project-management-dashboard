import { Draggable } from "react-beautiful-dnd";
import { Task } from "../context/KanbanContext";

export default function TaskCard({ task, index }: { task: Task; index: number }) {
  return (
    <Draggable draggableId={task.id} index={index}>
      {provided => (
        <div
          className="bg-accent rounded-xl shadow-card p-3 sm:p-4"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className="flex items-center gap-2 mb-2">
            <span className={`text-xs sm:text-sm font-bold py-1 px-2 rounded ${
              task.priority === "High" ? "bg-red-100 text-red-600" : "bg-yellow-100 text-yellow-700"
            }`}>
              {task.priority}
            </span>
          </div>
          <h3 className="font-semibold text-sm sm:text-base">{task.title}</h3>
          <p className="text-xs sm:text-sm text-gray-500">{task.description}</p>
        </div>
      )}
    </Draggable>
  );
}
