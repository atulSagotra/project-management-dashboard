import { FaRegCalendarAlt, FaRegBell, FaRegQuestionCircle, FaUserFriends, FaSearch } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import Image from "next/image";

export default function TopHeader() {
  return (
    <header className="w-full h-16 flex items-center bg-white px-4 sm:px-8 shadow-sm z-40">
      {/* Center: Search bar with icon */}
      <div className="flex-1 flex items-center min-w-0">
        <div className="relative w-full max-w-2xl mx-auto">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            <FaSearch />
          </span>
          <input
            className="w-full h-10 rounded-lg bg-gray-100 pl-10 pr-4 text-sm border-none outline-primary focus:ring-2 focus:ring-primary placeholder-gray-400"
            placeholder="Search for anything..."
            type="text"
          />
        </div>
      </div>

      {/* Right: Icon row, user info, far right team icon */}
      <div className="flex items-center gap-2 sm:gap-3 min-w-fit ml-3">
        <HeaderIconBtn>
          <FaRegCalendarAlt size={18} />
        </HeaderIconBtn>
        <HeaderIconBtn>
          <FaRegQuestionCircle size={18} />
        </HeaderIconBtn>
        <HeaderIconBtn>
          <FaRegBell size={18} />
        </HeaderIconBtn>
        {/* User info */}
        <div className="flex items-center gap-2 ml-2">
          <div className="hidden sm:flex flex-col items-end leading-none mr-1">
            <span className="font-semibold text-sm whitespace-nowrap">Anima Agrawal</span>
            <span className="text-xs text-gray-400 font-normal whitespace-nowrap">U.P, India</span>
          </div>
          <span className="w-8 h-8 rounded-full overflow-hidden border border-gray-100 flex items-center justify-center">
            <Image
              src="/avatar1.png"
              alt="Profile avatar"
              width={32}
              height={32}
              className="object-cover"
            />
          </span>
          <MdKeyboardArrowDown size={22} className="text-gray-400" />
        </div>
        {/* Team/collaborator icon (far right, matching image) */}
        <span className="ml-2 text-primary bg-primary/10 rounded-full p-2 flex items-center justify-center">
          <FaUserFriends size={18} />
        </span>
      </div>
    </header>
  );
}

// Header icon button utility
function HeaderIconBtn({ children }: { children: React.ReactNode }) {
  return (
    <button className="w-9 h-9 rounded-full flex items-center justify-center bg-gray-100 hover:bg-gray-200 transition text-gray-500">
      {children}
    </button>
  );
}
