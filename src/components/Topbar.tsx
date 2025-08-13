import AvatarGroup from './AvatarGroup';
import { HiOutlineMenu } from 'react-icons/hi';
import { FaLink, FaFilter, FaCalendarAlt, FaPlus } from 'react-icons/fa';
import { PiRowsLight } from 'react-icons/pi';
import { LuShare2 } from 'react-icons/lu';
import { FaPencil } from 'react-icons/fa6';

export default function Topbar({ onMenuClick }: { onMenuClick: () => void }) {
  return (
    <header className="w-full bg-white px-3 sm:px-8 pt-5 pb-3 border-b border-gray-100">
      {/* --- TOP ROW: Title, Edit, Link | Invite, AvatarGroup --- */}
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center min-w-0">
          {/* Hamburger (mobile only) */}
          <button
            className="md:hidden text-2xl text-gray-500 mr-1"
            onClick={onMenuClick}
            aria-label="Open sidebar"
          >
            <HiOutlineMenu />
          </button>
          {/* Title */}
          <h1 className="text-2xl sm:text-3xl font-bold text-[#0D062D] whitespace-nowrap mr-2">
            Mobile App
          </h1>
          {/* Edit (pencil) button */}
          <button className="w-8 h-8 bg-[#F5F6FA] hover:bg-[#EEEBFF] text-primary rounded-lg flex items-center justify-center text-base mr-2">
            <FaPencil />
          </button>
          {/* Link button */}
          <button className="w-8 h-8 bg-[#F5F6FA] hover:bg-[#EEEBFF] text-primary rounded-lg flex items-center justify-center text-base">
            <FaLink />
          </button>
        </div>
        <div className="flex items-center gap-2">
          {/* Invite button */}
          <button className="flex items-center gap-2 text-primary px-4 py-2 rounded-full bg-white border border-primary/20 font-medium text-sm shadow-sm hover:bg-[#FAFAFF]">
            <FaPlus className="text-base" />
            <span>Invite</span>
          </button>
          {/* AvatarGroup */}
          <AvatarGroup />
        </div>
      </div>

      {/* --- BOTTOM ROW: Filter, Today | Share, Board View --- */}
      <div className="flex items-center justify-between mt-3 gap-2 flex-wrap">
        <div className="flex items-center gap-2">
          {/* Filter button */}
          <button className="flex items-center gap-2 bg-[#F5F6FA] hover:bg-[#EFEFFD] rounded-lg py-2 px-3 text-sm text-[#787486] font-medium border border-gray-100 shadow-sm">
            <FaFilter className="text-lg" />
            <span>Filter</span>
          </button>
          {/* Today button */}
          <button className="flex items-center gap-2 bg-[#F5F6FA] hover:bg-[#EFEFFD] rounded-lg py-2 px-3 text-sm text-[#787486] font-medium border border-gray-100 shadow-sm">
            <FaCalendarAlt className="text-lg" />
            <span>Today</span>
          </button>
        </div>
        <div className="flex items-center gap-2">
          {/* Share button (arrow out, not loudspeaker) */}
          <button
            className="w-10 h-10 bg-[#F5F6FA] hover:bg-[#EEEBFF] text-primary rounded-lg flex items-center justify-center text-lg transition"
            aria-label="Share"
          >
            <LuShare2 />
          </button>
          {/* Board/Grid View button */}
          <button
            className="w-10 h-10 bg-[#F5F6FA] hover:bg-[#EEEBFF] text-primary rounded-lg flex items-center justify-center text-lg transition"
            aria-label="Board View"
          >
            <PiRowsLight />
          </button>
        </div>
      </div>
    </header>
  );
}
