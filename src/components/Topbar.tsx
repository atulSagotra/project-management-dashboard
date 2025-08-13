import AvatarGroup from './AvatarGroup';
import { HiOutlineMenu } from 'react-icons/hi';
import { FaLink, FaFilter, FaCalendarAlt, FaPlus } from 'react-icons/fa';
import { PiRowsLight } from 'react-icons/pi';
import { LuShare2 } from 'react-icons/lu';
import { FaPencil } from 'react-icons/fa6';
import Image from 'next/image';

export default function Topbar({ onMenuClick }: { onMenuClick: () => void }) {
  return (
    <header className="w-full bg-white px-3 sm:px-6 pt-5 pb-3">
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
          <h1 className="text-2xl sm:text-3xl font-bold text-[#0D062D] whitespace-nowrap">
            Mobile App
          </h1>
          {/* Edit (pencil) button */}
          <button className="w-8 h-8 flex items-center justify-center text-base">
            <Image
              src="/edit.svg"
              alt="Profile avatar"
              width={24}
              height={24}
              className="object-cover"
            />
          </button>
          {/* Link button */}
          <button className="w-8 h-8 flex items-center justify-center text-base">
            <Image
              src="/link.svg"
              alt="Profile avatar"
              width={24}
              height={24}
              className="object-cover"
            />
          </button>
        </div>
        <div className="flex items-center gap-2">
          {/* Invite button */}
          <button className="flex items-center gap-2 text-base px-4 py-2 bg-white border-primary/20 font-medium text-sm text-[#5030E5]">
            <Image
              src="/add-square.svg"
              alt="Profile avatar"
              width={24}
              height={24}
              className="object-cover"
            />
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
          <button className="flex items-center text-sm text-[#787486] font-medium">
            <Image
              src="/filter.svg"
              alt="Profile avatar"
              width={122}
              height={40}
              className="object-cover"
            />
          </button>
          {/* Today button */}
          <button className="flex items-center text-sm text-[#787486] font-medium">
            <Image
              src="/date.svg"
              alt="Profile avatar"
              width={122}
              height={40}
              className="object-cover"
            />
          </button>
        </div>
        <div className="flex items-center gap-2">
          {/* Share button (arrow out, not loudspeaker) */}
          <button
            className="flex items-center justify-center text-lg transition"
            aria-label="Share"
          >
            <Image
              src="/share.svg"
              alt="Profile avatar"
              width={220}
              height={40}
              className="object-cover"
            />
          </button>
        </div>
      </div>
    </header>
  );
}
