import { Draggable } from 'react-beautiful-dnd';
import { Task } from '../context/KanbanContext';
import { FaCommentAlt, FaPaperclip } from 'react-icons/fa';
import Image from 'next/image';

const avatars = ['/avatar1.png', '/avatar2.png'];

export default function TaskCard({
  task,
  index,
}: {
  task: Task;
  index: number;
}) {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={`bg-white rounded-xl shadow px-5 py-4 border border-transparent transition ${
            snapshot.isDragging ? 'ring-4 ring-[#d6defa] border-primary' : ''
          }`}
        >
          {/* Priority */}
          <div className="flex gap-2 items-center mb-2">
            <span
              className={`text-xs font-bold rounded px-2 py-0.5 ${
                task.priority === 'High'
                  ? 'bg-[#DFA874]/30 text-[#D58D49]'
                  : 'bg-[#DBD6FC] text-[#625F6D]'
              }`}
            >
              {task.priority}
            </span>
          </div>

          <h3 className="font-semibold text-base text-[#0D062D] mb-1">
            {task.title}
          </h3>
          <p className="text-sm text-[#787486] mb-4">{task.description}</p>

          {/* Footer */}
          <div className="flex items-center justify-between mt-1">
            <div className="flex -space-x-2">
              {avatars.map((src, i) => (
                <Image
                  key={i}
                  src={src}
                  width={24}
                  height={24}
                  alt=""
                  className="rounded-full border-2 border-white"
                />
              ))}
            </div>
            <div className="flex gap-3 text-xs text-[#787486] items-center">
              <span className="inline-flex items-center gap-1">
                <FaCommentAlt className="text-[13px]" /> 12
              </span>
              <span className="inline-flex items-center gap-1">
                <FaPaperclip className="text-[13px]" /> 0
              </span>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
}
