import { Droppable } from 'react-beautiful-dnd';
import TaskCard from './TaskCard';
import { Lane as LaneType } from '../context/KanbanContext';
import { FaPlus } from 'react-icons/fa6';
import { useKanban } from '../context/KanbanContext';

const laneColors: Record<string, string> = {
  todo: '#5030E5',
  progress: '#FFA500',
  done: '#8BC48A',
};

export default function Lane({ lane }: { lane: LaneType }) {
  const { addTask } = useKanban();
  console.log(lane);
  return (
    <div
      className="bg-[#F5F5F8] rounded-2xl flex-shrink-0 min-w-[330px] max-w-xs w-full flex flex-col shadow-sm border-t-8 py-5 px-4"
      style={{ borderTopColor: laneColors[lane.id] || '#5030E5' }}
    >
      {/* Header */}
      <div className="flex items-center justify-between w-full mb-4">
        <div className="flex items-center gap-2">
          <span
            className="w-3 h-3 rounded-full"
            style={{ background: laneColors[lane.id] || '#5030E5' }}
          />
          <span className="font-semibold text-lg tracking-tight">
            {lane.title}
          </span>
          <span className="ml-2 text-xs font-semibold bg-gray-100 px-2 py-0.5 rounded-full text-[#625F6D]">
            {lane.tasks.length}
          </span>
        </div>
        {lane.id === 'todo' && (
          <button
            className="w-6 h-6 rounded bg-[#F5F6FA] hover:bg-[#DEE0FB] text-primary flex items-center justify-center border border-[#E2E4F5] transition"
            aria-label="Add task"
            onClick={() => {
              const title = prompt('Enter task title');
              if (!title) return;
              const desc = prompt('Enter task description') || '';
              addTask(lane.id, title, desc, 'Low');
            }}
          >
            <FaPlus size={12} />
          </button>
        )}
      </div>

      {/* Tasks Droppable */}
      <Droppable droppableId={lane.id}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={`flex flex-col gap-4 min-h-[40px] ${
              snapshot.isDraggingOver ? 'bg-purple-50/40' : ''
            }`}
          >
            {lane.tasks.map((task, idx) => (
              <TaskCard key={task.id} task={task} index={idx} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
}
