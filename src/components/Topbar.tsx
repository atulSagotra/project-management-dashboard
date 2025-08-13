import AvatarGroup from "./AvatarGroup";
import { HiOutlineMenu } from "react-icons/hi";

export default function Topbar({ onMenuClick }: { onMenuClick: () => void }) {
  return (
    <header className="flex items-center justify-between py-4 px-4 md:px-8 bg-white gap-4">
      <div className="flex items-center gap-3">
        <button className="md:hidden text-2xl" onClick={onMenuClick}><HiOutlineMenu /></button>
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">Mobile App</h1>
      </div>
      <div className="flex items-center gap-2 sm:gap-4 flex-wrap">
        <button className="text-primary px-3 sm:px-4 py-1 sm:py-2 rounded hover:bg-accent text-sm font-medium border border-primary/20">
          Invite
        </button>
        <AvatarGroup />
      </div>
    </header>
  );
}
