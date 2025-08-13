const avatars = [
  '/avatar1.svg',
  '/avatar2.svg',
  '/avatar3.svg',
  '/avatar4.svg',
];

export default function AvatarGroup() {
  return (
    <div className="flex -space-x-3">
      {avatars.map((src, i) => (
        <img
          key={i}
          src={src}
          alt=""
          className="w-8 h-8 rounded-full border-1 border-white shadow"
        />
      ))}
      <span className="w-8 h-8 bg-[#F4D7DA] text-[#D25B68] text-xs flex items-center justify-center rounded-full border-1 border-white shadow">
        +2
      </span>
    </div>
  );
}
