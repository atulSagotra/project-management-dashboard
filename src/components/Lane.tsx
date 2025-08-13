import { Droppable } from '@hello-pangea/dnd';
import TaskCard from './TaskCard';
import { Lane as LaneType, useKanban } from '../context/KanbanContext';
import { FaPlus } from 'react-icons/fa6';
import Image from 'next/image';

const laneColors: Record<string, string> = {
  todo: '#5030E5',
  progress: '#FFA500',
  done: '#8BC48A',
};

export default function Lane({ lane }: { lane: LaneType }) {
  const { addTask } = useKanban();

  return (
    <div className="bg-[#F5F5F5] rounded-2xl flex-shrink-0 min-w-[330px] max-w-xs w-full flex flex-col shadow-sm py-5 px-4">
      {/* Header */}
      <div
        className="flex items-center justify-between w-full mb-4 border-b-3 pb-2"
        style={{ borderBottomColor: laneColors[lane.id] || '#5030E5' }}
      >
        <div className="flex items-center gap-2">
          <span
            className="w-2 h-2 rounded-full"
            style={{ background: laneColors[lane.id] || '#5030E5' }}
          />
          <span className="font-semibold text-lg tracking-tight">
            {lane.title}
          </span>
          <span className="ml-2 text-xs font-semibold bg-gray-200 px-2 py-0.5 rounded-full text-[#625F6D]">
            {lane.tasks.length}
          </span>
        </div>
        {lane.id === 'todo' && (
          <button
            className="flex items-center justify-center"
            aria-label="Add task"
            onClick={() => {
              const title = prompt('Enter task title');
              if (!title) return;
              const desc = prompt('Enter task description') || '';
              const priority = prompt('Enter task Priority') || '';
              addTask(lane.id, title, desc, priority);
            }}
          >
            <Image
              src="/add-square.svg"
              width={24}
              height={24}
              alt="brand-avatar"
              className="object-cover"
            />
          </button>
        )}
      </div>

      <Droppable droppableId={lane.id}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={`flex flex-col gap-4 min-h-[40px] ${snapshot.isDraggingOver ? 'bg-purple-50/40' : ''}`}
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
