import Image from 'next/image';
import {
  FaHome,
  FaRegCommentDots,
  FaTasks,
  FaUserFriends,
  FaCog,
  FaPlus,
  FaLightbulb,
} from 'react-icons/fa';
import { BsThreeDots } from 'react-icons/bs';

const navItems = [
  { label: 'Home', icon: <FaHome />, selected: false },
  { label: 'Messages', icon: <FaRegCommentDots /> },
  { label: 'Tasks', icon: <FaTasks /> },
  { label: 'Members', icon: <FaUserFriends /> },
  { label: 'Settings', icon: <FaCog /> },
];

const projects = [
  { name: 'Mobile App', color: 'bg-green-500', selected: true },
  { name: 'Website Redesign', color: 'bg-orange-400' },
  { name: 'Design System', color: 'bg-purple-300' },
  { name: 'Wireframes', color: 'bg-blue-400' },
];

export default function Sidebar() {
  return (
    <aside className="w-72 min-w-[260px] max-w-xs bg-white flex flex-col border-r border-gray-200">
      {/* Brand row (avatar + Project M. + collaborators icon, all in a row) */}
      <div className="flex items-center justify-between px-6 py-6 pb-3 shadow-sm">
        <div className="flex items-center gap-3">
          <div>
            <Image
              src="/project_logo.svg"
              width={24}
              height={24}
              alt="brand-avatar"
              className="object-cover"
            />
          </div>
          <span className="font-bold text-lg">Project M.</span>
        </div>
        <Image
          src="/project_arrow.svg"
          width={26}
          height={20}
          alt="brand-avatar"
          className="object-cover"
        />
      </div>

      {/* NAVIGATION */}
      <nav className="flex flex-col px-3 gap-1 pt-3">
        {navItems.map((item) => (
          <button
            key={item.label}
            className={`
              group flex items-center gap-3 px-5 py-2 rounded-lg text-base font-medium relative transition
              ${
                item.selected
                  ? 'bg-[#F5F6FA] text-[#635DFF]'
                  : 'text-gray-500 hover:bg-[#F5F6FA] hover:text-[#635DFF]'
              }
            `}
          >
            {/* Left purple bar bubble for selected nav */}
            {item.selected && (
              <span className="absolute left-0 h-6 w-1 rounded-r bg-primary" />
            )}
            <span className="w-5 flex items-center justify-center z-10">
              {item.icon}
            </span>
            <span className="ml-1">{item.label}</span>
          </button>
        ))}
      </nav>

      {/* Divider */}
      <div className="my-5 border-t border-[#F4F5F7] mx-6" />

      {/* PROJECTS HEADER */}
      <div className="flex items-center justify-between px-6 mb-2">
        <span className="text-[11px] tracking-widest font-bold text-gray-400 uppercase">
          My Projects
        </span>
        <button className="w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-primary hover:border-primary transition">
          <FaPlus size={12} />
        </button>
      </div>

      {/* PROJECTS LIST */}
      <ul className="space-y-1 px-2 mb-8">
        {projects.map(({ name, color, selected }) => (
          <li key={name}>
            <button
              className={`flex items-center justify-between px-4 py-2 rounded-lg w-full group ${
                selected
                  ? 'bg-[#F5F6FA] font-semibold text-gray-900'
                  : 'text-gray-600 hover:bg-[#F5F6FA]'
              }`}
            >
              {/* Dot + Name */}
              <span className="flex items-center gap-3">
                <span className={`w-2 h-2 rounded-full ${color}`} />
                {name}
              </span>
              {/* Menu dots (for current project only) */}
              {selected && (
                <BsThreeDots className="text-gray-400 group-hover:text-primary" />
              )}
            </button>
          </li>
        ))}
      </ul>

      {/* Thoughts Time */}
      <div className="mt-auto mb-7 px-6">
        <div className="bg-[#F5F6FA] rounded-xl p-4 flex flex-col items-center border border-[#F1F1F1] text-center">
          <div className="w-8 h-8 rounded-full bg-yellow-50 text-yellow-400 flex items-center justify-center mb-2">
            <FaLightbulb size={18} />
          </div>
          <div className="text-xs font-bold text-gray-500 mb-1">
            Thoughts Time
          </div>
          <div className="text-[11px] text-gray-400 leading-tight mb-3">
            We don’t have any notice for you,
            <br />
            till then you can share your thoughts with your peers.
          </div>
          <button className="bg-white border border-gray-200 rounded-lg px-3 py-1 text-xs font-semibold hover:bg-gray-50">
            Write a message
          </button>
        </div>
      </div>
    </aside>
  );
}
