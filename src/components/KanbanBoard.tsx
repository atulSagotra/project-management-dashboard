import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useKanban } from "../context/KanbanContext";
import Lane from "./Lane";

export default function KanbanBoard() {
  const { lanes, moveTask } = useKanban();

  const onDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    moveTask(result.source.droppableId, result.destination.droppableId, result.source.index, result.destination.index);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="flex gap-4 md:gap-6 overflow-x-auto pb-4">
        {lanes.map(lane => <Lane key={lane.id} lane={lane} />)}
      </div>
    </DragDropContext>
  );
}
